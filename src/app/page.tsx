"use client";
import type { ReactElement } from "react";
import ProjectPage from "./projects/page";
import AboutPage from "./about/page";
import ProjectCard from "./projects/projectCard";
import CircularImage from "./components/circularImage";

export default function Home() {
  return (
    <div>
      <CircularImage src="/selfie.jpg" alt="Nick Ledbetter" />
      <AboutPage />
      <p>Professional Projects and Open Source </p>
      <ProjectCard
        title="American Veterinary Medical Association App"
        description="This was my Senior Capstone Project at Oregon State University. I led the development of a mobile application for the American Veterinary Medical Association. This mobile app was part of a comprehensive solutionn including a full-stack web app, mobile app, and database developed by my team over the course of a year. The mobile app was built using Flutter, and I also contributed to the React/Node.js web app and PostgreSQL database."
      />
      <ProjectCard
        title="Flutter"
        description="Flutter is my favorite programming language, and I am starting to contribute in my spare time."
      />
      <p>
        ** Highlight AVMA Project, recently started contributing to Flutter in
        free time
      </p>
      <p>My Projects</p>
      <p>
        I love to create new things! Below you can find some of my favorite
        projects so far
      </p>
      <ProjectPage />
      <p>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id
        dui in purus cursus pellentesque ut quis velit. Aliquam aliquet felis
        quis turpis pharetra rhoncus. Aliquam nisi orci, condimentum vel
        tincidunt eleifend, tristique nec nulla. Curabitur sapien orci, vehicula
        at tortor sit amet, eleifend hendrerit nisi. Morbi ac pharetra mi. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium at metus
        id euismod. Donec est tortor, vehicula sed nibh in, tristique lobortis
        risus. Duis tempus nisl eget sagittis dapibus. Maecenas ultricies id
        tellus id euismod. Curabitur id suscipit ex, vitae finibus sem. Mauris
        ultricies lectus in massa aliquet tempus. Nulla bibendum sagittis felis
        in rhoncus. Etiam vulputate ullamcorper blandit. Proin dignissim magna
        ac tellus fermentum, at rhoncus nisi finibus. Vivamus luctus libero
        euismod ex porttitor, sit amet imperdiet neque sagittis. Vestibulum
        egestas id urna aliquam rutrum. Nunc sed lectus eu lorem luctus luctus
        efficitur at leo. Fusce sollicitudin lorem ut sapien aliquet, quis
        eleifend nibh rutrum. Morbi tincidunt eget est eget semper. Fusce
        accumsan ipsum ante, eu consequat diam convallis ac. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Vestibulum eleifend erat venenatis ligula dapibus, vitae
        gravida ipsum sagittis. Cras viverra laoreet ante, vel varius nibh
        imperdiet nec. Praesent laoreet non felis eu pharetra. Nulla aliquam
        congue dui, id viverra neque elementum vel. Suspendisse aliquet suscipit
        mauris sit amet congue. Sed purus felis, luctus in lorem quis, suscipit
        auctor magna. Quisque vel dapibus tellus. Pellentesque in felis ipsum.
        Aenean suscipit rhoncus elit, sed ornare sapien consectetur vitae.
        Curabitur bibendum dignissim metus et tincidunt. Ut accumsan varius
        quam. Suspendisse potenti. Donec egestas suscipit leo vel facilisis.
        Etiam dapibus mattis orci, ac suscipit dui feugiat aliquet. Mauris eget
        urna neque. Quisque commodo orci in mi convallis ornare. Etiam rutrum
        volutpat porta. Vivamus vulputate elit sem, id aliquet nunc eleifend
        vitae. In porttitor neque sapien, a tempor tellus pellentesque sit amet.
        Vestibulum ut luctus lorem. Donec diam dolor, porta ut fermentum id,
        tincidunt sed massa. Curabitur sed consequat ante. Pellentesque sagittis
        accumsan purus, quis interdum lacus efficitur ut. Integer congue
        efficitur libero non eleifend. Nunc commodo sem quis facilisis eleifend.
        Morbi nisl libero, mattis eget risus ut, cursus dictum ligula.
        Suspendisse porttitor consectetur augue, id interdum urna porta quis.
        Cras hendrerit risus eget ornare ultrices. Suspendisse et massa nisi.
        Donec molestie leo at risus elementum vestibulum. Aliquam ornare
        vehicula mauris, non lacinia magna rhoncus et. Aliquam nec turpis diam.
        Proin eu ex nisl. Nulla sed urna pretium, ullamcorper mi at, rhoncus
        sem. Nulla turpis sem, molestie a aliquet quis, blandit condimentum
        risus. Etiam ullamcorper urna eu mauris rhoncus, nec tristique leo
        lobortis. Suspendisse vitae dui sed magna pulvinar malesuada. Integer
        sollicitudin, tortor vitae congue sagittis, ipsum tortor mattis orci,
        vitae convallis libero lorem sed tellus. Ut egestas feugiat pulvinar.
        Duis aliquam maximus magna nec condimentum. Sed arcu lacus, imperdiet
        quis gravida vitae, mollis vel mi. Sed commodo enim sit amet odio
        placerat facilisis. Vivamus erat augue, viverra id augue vitae, feugiat
        sollicitudin metus. Sed pretium malesuada lacus, ac scelerisque dolor
        imperdiet eget. In porta, quam in tempor pretium, erat nulla faucibus
        augue, consectetur pellentesque nibh lectus vel lectus. Praesent sed
        odio vestibulum, mattis dolor ullamcorper, ornare purus. Vivamus at
        massa eget metus rutrum laoreet vitae eu ipsum. Curabitur ultricies
        rutrum pulvinar. Mauris scelerisque rutrum tincidunt. Aliquam vel dolor
        turpis. Vivamus commodo mattis est, at luctus dui scelerisque a. Aenean
        ut porta sem. Nullam sodales sapien nec elit placerat maximus.
        Suspendisse lacus felis, varius gravida lorem quis, finibus tristique
        lacus. In hac habitasse platea dictumst. Nulla a lorem viverra,
        pellentesque felis nec, efficitur justo. Aliquam fermentum, felis eget
        dictum vehicula, sapien dolor rutrum risus, lacinia elementum odio ex a
        leo. In porta dignissim enim, sed condimentum lacus maximus in. Nullam
        elementum pretium diam, quis ultricies massa iaculis vulputate. Proin
        tincidunt turpis justo, et vestibulum metus pellentesque id. Phasellus
        lectus dui, tincidunt euismod ante et, eleifend rhoncus dolor. Ut vel
        lorem congue, iaculis tortor pulvinar, fermentum urna. Pellentesque
        hendrerit posuere iaculis. Maecenas eget nibh magna. Pellentesque vel
        nibh volutpat, fermentum arcu et, fringilla magna. In pharetra eu purus
        non mattis. Pellentesque pharetra dui quis nisl maximus ultricies. In
        aliquet vestibulum risus eget molestie. Donec eu massa at erat
        condimentum accumsan. Sed viverra ex vitae tortor tempor finibus. In at
        facilisis lectus. Duis elementum, metus id euismod feugiat, nisi mauris
        dapibus lectus, eget cursus odio purus sit amet quam. Duis quis turpis
        ut nisl bibendum finibus. Aenean tincidunt, ipsum a molestie
        ullamcorper, nibh magna congue nulla, at posuere tellus quam sit amet
        mauris. Morbi a ante molestie, iaculis turpis non, lacinia leo. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Curabitur vel orci sed est pulvinar interdum sed vel
        nunc. Integer vel rhoncus nibh. Proin ac metus faucibus, aliquam ex in,
        mollis tellus. Vivamus lacinia erat eget porttitor pretium. Aenean a
        condimentum eros, nec suscipit nisi. Nullam et dui tellus. Cras faucibus
        tristique lorem a euismod.{" "}
      </p>
    </div>
  );
}

// return (
//   <main className="flex min-h-screen flex-col items-center justify-between p-24">
//     <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//       <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//         Get started by editing&nbsp;
//         <code className="font-mono font-bold">src/app/page.tsx</code>
//       </p>
//       <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//         <a
//           className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           By{" "}
//           <Image
//             src="/vercel.svg"
//             alt="Vercel Logo"
//             className="dark:invert"
//             width={100}
//             height={24}
//             priority
//           />
//         </a>
//       </div>
//     </div>

//     <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
//       <Image
//         className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//         src="/next.svg"
//         alt="Next.js Logo"
//         width={180}
//         height={37}
//         priority
//       />
//     </div>

//     <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//       <a
//         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <h2 className={`mb-3 text-2xl font-semibold`}>
//           Docs{" "}
//           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//             -&gt;
//           </span>
//         </h2>
//         <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//           Find in-depth information about Next.js features and API.
//         </p>
//       </a>

//       <a
//         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <h2 className={`mb-3 text-2xl font-semibold`}>
//           Learn{" "}
//           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//             -&gt;
//           </span>
//         </h2>
//         <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//           Learn about Next.js in an interactive course with&nbsp;quizzes!
//         </p>
//       </a>

//       <a
//         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <h2 className={`mb-3 text-2xl font-semibold`}>
//           Templates{" "}
//           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//             -&gt;
//           </span>
//         </h2>
//         <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//           Explore starter templates for Next.js.
//         </p>
//       </a>

//       <a
//         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <h2 className={`mb-3 text-2xl font-semibold`}>
//           Deploy{" "}
//           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//             -&gt;
//           </span>
//         </h2>
//         <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
//           Instantly deploy your Next.js site to a shareable URL with Vercel.
//         </p>
//       </a>
//     </div>
//   </main>
// );
