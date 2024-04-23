function Header({ title }: { title: string }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  const categoryNames = [
    "Web and Mobile Applications",
    "Discord Bots",
    "Computer Graphics",
    "High Performance Computing",
  ];

  return (
    <div>
      <Header title="About Me" />
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        iaculis congue lacus, eu semper tellus luctus eget. Quisque diam orci,
        auctor sit amet consequat sit amet, interdum id tortor. Suspendisse
        varius lacinia turpis, quis malesuada sem pretium eu. Donec sollicitudin
        tempor mi, eu imperdiet lacus commodo aliquet. Quisque euismod diam
        justo, in feugiat diam ornare vel. Quisque ultrices metus tortor, a
        lobortis nisi hendrerit quis. Sed ac mi maximus, vehicula ante vitae,
        mattis risus. Integer vel urna vel est dignissim feugiat. Nam
        pellentesque lobortis ex vel ornare. Sed in ante sollicitudin, interdum
        tortor vitae, faucibus turpis. Mauris vestibulum tristique egestas.
        Vivamus egestas lectus sed ex sodales, vitae tincidunt lorem maximus.
        Maecenas malesuada nec urna id mattis. Sed vestibulum augue a nisl
        faucibus efficitur. Quisque suscipit bibendum ante, non gravida eros
        facilisis vitae. Pellentesque ultricies massa in nunc blandit semper
        quis sed quam."
      </p>
      {/*<LikeButton />*/}
    </div>
  );
}
