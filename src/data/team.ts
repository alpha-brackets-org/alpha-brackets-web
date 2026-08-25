import { TeamMember } from "@/types";

/**
 * Team data for /team and /team-details, both of which return notFound().
 *
 * Two things to fix before re-enabling those pages:
 *
 * 1. **The `img` paths below no longer resolve.** They pointed at stock template
 *    photos in `assets/imgs/team/`, which were deleted with the rest of the unused
 *    template imagery. Real photos of real people are needed here, not
 *    replacements from git history.
 * 2. **Verify the names.** Some of these read as template placeholders rather than
 *    actual team members. Publishing invented colleagues is the same class of
 *    problem as the fabricated client logos in clients.ts, see the "never invent
 *    data" rule in AGENTS.md.
 */
const team: TeamMember[] = [
  {
    img: "/assets/imgs/team/1.jpg",
    name: "Saad Qadir",
    subName: "Founder & Technical Lead",
  },
  {
    img: "/assets/imgs/team/2.jpg",
    name: "Ahmed Khaled",
    subName: "Senior Fullstack Engineer",
  },
  {
    img: "/assets/imgs/team/3.jpg",
    name: "Sarah Johnson",
    subName: "UI/UX Strategist",
  },
  {
    img: "/assets/imgs/team/4.jpg",
    name: "Michael Chen",
    subName: "DevOps Excellence",
  },
];

export default team;
