/*
 * DESIGN: Industrial Brutalism — Individual solution landing page
 */
import { useParams } from "wouter";
import SolutionPage from "@/components/SolutionPage";
import { solutionsData, allSolutionsNav } from "@/lib/solutionsData";
import NotFound from "./NotFound";

export default function SolutionDetailPage() {
  const params = useParams<{ id: string }>();
  const solution = solutionsData.find((s) => s.id === params.id);

  if (!solution) return <NotFound />;

  return <SolutionPage solution={solution} allSolutions={allSolutionsNav} />;
}
