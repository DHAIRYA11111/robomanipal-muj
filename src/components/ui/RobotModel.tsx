"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Rotate3D } from "lucide-react";
import { cn } from "@/lib/utils";

type RobotModelProps = {
  slug: string;
  className?: string;
  compact?: boolean;
};

const RED = 0xb81818;
const CREAM = 0xddd6c8;
const STEEL = 0x716b68;
const DARK = 0x191313;

function addBox(
  group: THREE.Group,
  size: [number, number, number],
  position: [number, number, number],
  material: THREE.Material,
  rotation: [number, number, number] = [0, 0, 0],
) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
  mesh.position.set(...position);
  mesh.rotation.set(...rotation);
  group.add(mesh);
  return mesh;
}

function addCylinder(
  group: THREE.Group,
  radius: number,
  depth: number,
  position: [number, number, number],
  material: THREE.Material,
  rotation: [number, number, number] = [0, 0, 0],
) {
  const mesh = new THREE.Mesh(
    new THREE.CylinderGeometry(radius, radius, depth, 28),
    material,
  );
  mesh.position.set(...position);
  mesh.rotation.set(...rotation);
  group.add(mesh);
  return mesh;
}

function addWheels(
  group: THREE.Group,
  material: THREE.Material,
  positions: [number, number, number][],
  radius = 0.42,
) {
  positions.forEach((position) => {
    addCylinder(group, radius, 0.32, position, material, [Math.PI / 2, 0, 0]);
  });
}

function buildSoccer(
  group: THREE.Group,
  materials: Record<string, THREE.MeshStandardMaterial>,
) {
  addBox(group, [2.7, 0.5, 1.8], [0, 0.05, 0], materials.red);
  addBox(group, [1.55, 0.5, 1.35], [-0.15, 0.52, 0], materials.cream);
  addBox(group, [0.26, 0.22, 1.55], [1.56, -0.05, 0], materials.steel, [0, 0, -0.3]);
  addBox(group, [0.55, 0.12, 1.25], [1.7, -0.22, 0], materials.cream);
  addCylinder(group, 0.24, 0.25, [-0.35, 0.93, 0], materials.dark);
  addWheels(
    group,
    materials.dark,
    [
      [-0.85, -0.2, -1.02],
      [-0.85, -0.2, 1.02],
      [0.9, -0.2, -1.02],
      [0.9, -0.2, 1.02],
    ],
  );
}

function buildCombat(
  group: THREE.Group,
  materials: Record<string, THREE.MeshStandardMaterial>,
) {
  addBox(group, [2.7, 0.42, 1.75], [0, -0.08, 0], materials.dark);
  addBox(group, [1.6, 0.35, 1.55], [-0.35, 0.34, 0], materials.red, [0, 0, 0.12]);
  addBox(group, [1.15, 0.13, 1.6], [1.3, 0.04, 0], materials.steel, [0, 0, -0.28]);
  addCylinder(group, 0.16, 2.35, [-0.45, 0.92, 0], materials.cream, [Math.PI / 2, 0, 0]);
  addBox(group, [0.28, 0.12, 2.8], [-0.45, 0.92, 0], materials.red, [0, 0.22, 0]);
  addWheels(
    group,
    materials.dark,
    [
      [-0.75, -0.22, -1.02],
      [-0.75, -0.22, 1.02],
      [0.85, -0.22, -1.02],
      [0.85, -0.22, 1.02],
    ],
    0.47,
  );
}

function buildLineFollower(
  group: THREE.Group,
  materials: Record<string, THREE.MeshStandardMaterial>,
) {
  addBox(group, [2.35, 0.16, 1.55], [0, 0.05, 0], materials.cream);
  addBox(group, [1.15, 0.42, 1.15], [-0.25, 0.37, 0], materials.dark);
  addBox(group, [0.28, 0.16, 2.35], [1.28, -0.05, 0], materials.red);
  [-0.75, -0.25, 0.25, 0.75].forEach((z) =>
    addCylinder(group, 0.09, 0.08, [1.42, -0.18, z], materials.steel),
  );
  addWheels(
    group,
    materials.dark,
    [
      [-0.45, -0.25, -0.95],
      [-0.45, -0.25, 0.95],
    ],
    0.52,
  );
  addCylinder(group, 0.14, 0.2, [1.1, -0.24, 0], materials.steel);
}

function buildDrone(
  group: THREE.Group,
  materials: Record<string, THREE.MeshStandardMaterial>,
) {
  addBox(group, [1.25, 0.36, 0.9], [0, 0, 0], materials.red);
  addBox(group, [3.2, 0.12, 0.18], [0, 0.05, 0], materials.steel, [0, Math.PI / 4, 0]);
  addBox(group, [3.2, 0.12, 0.18], [0, 0.05, 0], materials.steel, [0, -Math.PI / 4, 0]);
  [
    [-1.15, 0.12, -1.15],
    [-1.15, 0.12, 1.15],
    [1.15, 0.12, -1.15],
    [1.15, 0.12, 1.15],
  ].forEach(([x, y, z]) => {
    addCylinder(group, 0.22, 0.28, [x, y, z], materials.dark);
    const rotor = new THREE.Mesh(
      new THREE.TorusGeometry(0.58, 0.035, 8, 36),
      materials.cream,
    );
    rotor.position.set(x, y + 0.2, z);
    rotor.rotation.x = Math.PI / 2;
    group.add(rotor);
  });
  addCylinder(group, 0.22, 0.3, [0.42, -0.34, 0], materials.dark, [Math.PI / 2, 0, 0]);
}

function buildArm(
  group: THREE.Group,
  materials: Record<string, THREE.MeshStandardMaterial>,
) {
  addCylinder(group, 0.82, 0.32, [0, -0.42, 0], materials.dark);
  addCylinder(group, 0.55, 0.32, [0, -0.12, 0], materials.red);
  addBox(group, [0.55, 1.75, 0.55], [0.15, 0.82, 0], materials.cream, [0, 0, -0.22]);
  addCylinder(group, 0.38, 0.72, [0.35, 1.65, 0], materials.dark, [Math.PI / 2, 0, 0]);
  addBox(group, [0.48, 1.55, 0.48], [0.93, 2.25, 0], materials.red, [0, 0, -0.62]);
  addCylinder(group, 0.3, 0.62, [1.55, 2.72, 0], materials.dark, [Math.PI / 2, 0, 0]);
  addBox(group, [0.7, 0.23, 0.25], [1.95, 2.78, 0], materials.steel);
  addBox(group, [0.15, 0.58, 0.16], [2.28, 2.98, -0.2], materials.cream, [0.2, 0, -0.25]);
  addBox(group, [0.15, 0.58, 0.16], [2.28, 2.98, 0.2], materials.cream, [-0.2, 0, -0.25]);
  group.scale.setScalar(0.74);
  group.position.y = -0.45;
}

function buildRCCar(
  group: THREE.Group,
  materials: Record<string, THREE.MeshStandardMaterial>,
) {
  addBox(group, [2.85, 0.28, 1.5], [0, -0.08, 0], materials.dark);
  addBox(group, [1.75, 0.48, 1.32], [-0.2, 0.3, 0], materials.red);
  addBox(group, [0.9, 0.42, 1.12], [-0.45, 0.72, 0], materials.cream, [0, 0, -0.12]);
  addBox(group, [0.8, 0.12, 1.42], [1.35, 0.05, 0], materials.steel, [0, 0, -0.08]);
  addBox(group, [0.12, 0.48, 1.2], [-1.35, 0.35, 0], materials.red);
  addWheels(
    group,
    materials.dark,
    [
      [-0.92, -0.22, -0.92],
      [-0.92, -0.22, 0.92],
      [0.92, -0.22, -0.92],
      [0.92, -0.22, 0.92],
    ],
    0.5,
  );
  addCylinder(group, 0.06, 0.8, [-0.9, 1.05, 0.35], materials.steel, [0, 0, -0.18]);
}

function buildRCPlane(
  group: THREE.Group,
  materials: Record<string, THREE.MeshStandardMaterial>,
) {
  addBox(group, [3.4, 0.38, 0.42], [0, 0.1, 0], materials.cream);
  addBox(group, [1.35, 0.13, 3.75], [-0.05, 0.16, 0], materials.red);
  addBox(group, [0.75, 0.1, 1.65], [-1.45, 0.25, 0], materials.steel);
  addBox(group, [0.45, 0.82, 0.12], [-1.45, 0.64, 0], materials.red, [0, 0, -0.18]);
  addCylinder(group, 0.3, 0.42, [1.82, 0.1, 0], materials.dark, [0, 0, Math.PI / 2]);
  addBox(group, [0.08, 1.45, 0.1], [2.05, 0.1, 0], materials.steel, [Math.PI / 4, 0, 0]);
  addBox(group, [0.08, 1.45, 0.1], [2.05, 0.1, 0], materials.steel, [-Math.PI / 4, 0, 0]);
  addCylinder(group, 0.13, 0.78, [-0.35, -0.42, 0], materials.dark, [Math.PI / 2, 0, 0]);
  group.rotation.z = -0.04;
}

function buildRobot(slug: string) {
  const materials = {
    red: new THREE.MeshStandardMaterial({ color: RED, metalness: 0.72, roughness: 0.26 }),
    cream: new THREE.MeshStandardMaterial({ color: CREAM, metalness: 0.4, roughness: 0.3 }),
    steel: new THREE.MeshStandardMaterial({ color: STEEL, metalness: 0.88, roughness: 0.23 }),
    dark: new THREE.MeshStandardMaterial({ color: DARK, metalness: 0.45, roughness: 0.5 }),
  };
  const group = new THREE.Group();

  if (slug === "rc-car") buildRCCar(group, materials);
  else if (slug === "rc-plane") buildRCPlane(group, materials);
  else if (slug === "robowars-bot") buildCombat(group, materials);
  else if (slug === "line-following-bot") buildLineFollower(group, materials);
  else if (slug === "multifunctional-drones") buildDrone(group, materials);
  else if (slug === "robotic-arm") buildArm(group, materials);
  else buildSoccer(group, materials);

  group.traverse((object) => {
    if (object instanceof THREE.Mesh) {
      object.castShadow = true;
      object.receiveShadow = true;
    }
  });
  return group;
}

export default function RobotModel({ slug, className, compact = false }: RobotModelProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(5.1, 3.4, 5.1);
    camera.lookAt(0, 0.35, 0);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.shadowMap.enabled = !compact;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    scene.add(new THREE.HemisphereLight(0xf4ecdf, 0x2b0505, 2.1));
    const key = new THREE.DirectionalLight(0xffffff, 3.6);
    key.position.set(3.5, 5.5, 4);
    key.castShadow = !compact;
    scene.add(key);
    const rim = new THREE.PointLight(RED, 32, 12);
    rim.position.set(-3, 1.3, -2.6);
    scene.add(rim);

    const robot = buildRobot(slug);
    scene.add(robot);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.1, 0.012, 8, 96),
      new THREE.MeshBasicMaterial({ color: RED, transparent: true, opacity: 0.38 }),
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -0.7;
    scene.add(ring);

    let frame = 0;
    let dragging = false;
    let moved = false;
    let lastX = 0;
    let lastY = 0;
    let targetY = -0.65;
    let targetX = 0.12;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      renderer.setSize(rect.width, rect.height, false);
      camera.aspect = rect.width / rect.height;
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();

    const onPointerDown = (event: PointerEvent) => {
      dragging = true;
      moved = false;
      lastX = event.clientX;
      lastY = event.clientY;
      canvas.setPointerCapture(event.pointerId);
      event.stopPropagation();
    };
    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      if (Math.abs(dx) + Math.abs(dy) > 2) moved = true;
      targetY += dx * 0.012;
      targetX = THREE.MathUtils.clamp(targetX + dy * 0.008, -0.45, 0.7);
      lastX = event.clientX;
      lastY = event.clientY;
      event.preventDefault();
      event.stopPropagation();
    };
    const onPointerUp = (event: PointerEvent) => {
      dragging = false;
      if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
      event.stopPropagation();
    };
    const onWheel = (event: WheelEvent) => {
      targetY += event.deltaY * 0.0022;
      event.preventDefault();
      event.stopPropagation();
    };
    const onClick = (event: MouseEvent) => {
      if (!moved) return;
      event.preventDefault();
      event.stopPropagation();
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);
    canvas.addEventListener("wheel", onWheel, { passive: false });
    canvas.addEventListener("click", onClick);

    const render = () => {
      if (!dragging && !reducedMotion) targetY += compact ? 0.0022 : 0.0015;
      robot.rotation.y += (targetY - robot.rotation.y) * 0.075;
      robot.rotation.x += (targetX - robot.rotation.x) * 0.075;
      ring.rotation.z -= 0.0015;
      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerUp);
      canvas.removeEventListener("wheel", onWheel);
      canvas.removeEventListener("click", onClick);
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          const mats = Array.isArray(object.material) ? object.material : [object.material];
          mats.forEach((material) => material.dispose());
        }
      });
      renderer.dispose();
    };
  }, [compact, slug]);

  return (
    <div
      className={cn("relative h-full w-full select-none", className)}
      aria-label="Interactive 3D robot model. Drag or scroll to rotate."
      role="img"
      data-robot-model={slug}
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full touch-none cursor-grab active:cursor-grabbing"
      />
      <span className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-cotton/10 bg-noir-900/65 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-cotton/45 backdrop-blur-sm">
        <Rotate3D className="h-3 w-3 text-cherry-glow" />
        Drag / scroll to rotate
      </span>
    </div>
  );
}
