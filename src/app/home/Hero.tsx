import Link from "next/link";
import { FlexboxSpacer } from "components/FlexboxSpacer";
import { AutoTypingResume } from "home/AutoTypingResume";

export const Hero = () => {
  return (
    <section className="lg:flex lg:h-[825px] lg:justify-center">
      <FlexboxSpacer maxWidth={75} minWidth={0} className="hidden lg:block" />
      <div className="mx-auto max-w-xl pt-8 text-center lg:mx-0 lg:grow lg:pt-32 lg:text-left">
        <h1 className="text-primary pb-2 text-4xl font-bold lg:text-5xl">
          Build a compelling
          <br />
          resume fast and easy
        </h1>
        <p className="mt-3 text-lg lg:mt-5 lg:text-xl">
          <h2 className="text-left text-xl font-bold">
          In only 3 STEPS:
          <br />
          <br />
          1. Add a resume pdf or create from scratch
          <br />
          2. Preview your design and make necessary edits
          <br />
          3. Download your resume and go get that job
          </h2>
        </p>
        <Link href="/resume-import" className="btn-primary mt-6 lg:mt-14">
          Build Resume <span aria-hidden="true">→</span>
        </Link>
        <p className="ml-6 mt-3 text-sm text-gray-600">No sign up required</p>
      </div>
      <FlexboxSpacer maxWidth={100} minWidth={50} className="hidden lg:block" />
      <div className="mt-6 flex justify-center lg:mt-4 lg:block lg:grow">
        <AutoTypingResume />
      </div>
    </section>
  );
};