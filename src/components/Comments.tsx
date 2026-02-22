"use client";

import Giscus from "@giscus/react";

export default function Comments() {
  return (
    <section id="comments" className="mt-16 pt-10 border-t border-border scroll-mt-24">
      <h2 className="text-xl font-bold text-white mb-6">Comments</h2>
      <Giscus
        repo="Frozies/davinyoung.com"
        repoId="R_kgDORUSCfw"
        category="Announcements"
        categoryId="DIC_kwDORUSCf84C2_kr"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="dark_dimmed"
        lang="en"
        loading="lazy"
      />
    </section>
  );
}
