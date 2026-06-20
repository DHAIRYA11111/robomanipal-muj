import { MEMBERS } from "@/data/team";
import MemberCard from "@/components/cards/MemberCard";

export default function TeamView() {
  return (
    <section className="container-wide py-16 md:py-24">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {MEMBERS.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
}
