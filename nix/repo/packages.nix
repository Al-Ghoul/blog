{
  inputs,
  cell,
}: let
  inherit (inputs) nixpkgs;
in {
  prettier-plugin-astro = nixpkgs.stdenv.mkDerivation (finalAttrs: {
    pname = "prettier-plugin-astro";
    version = "0.14.1";

    src = nixpkgs.fetchFromGitHub {
      owner = "withastro";
      repo = "prettier-plugin-astro";
      rev = "1150195386a80221882d603dffa94990709395fb";
      hash = "sha256-XGPz4D2UKOonet0tX3up5mCxw3/69XYPScxb9l7nzpE=";
    };

    nativeBuildInputs = [
      nixpkgs.nodejs
      nixpkgs.pnpm_8.configHook
    ];

    pnpmDeps = nixpkgs.pnpm_8.fetchDeps {
      inherit (finalAttrs) pname version src;
      hash = "sha256-AjSCOQKVJlEdfOX9RQYir1hJBfUeszFHGE8VYoDUk9w=";
    };

    buildPhase = ''
      runHook preBuild
      pnpm build
      runHook postBuild
    '';

    installPhase = ''
      runHook preInstall

      mkdir -p $out/
      cp -r dist/ $out
      cp -r node_modules/ $out

      runHook postInstall
    '';
  });
  prettier-plugin-svelte = nixpkgs.buildNpmPackage (_finalAttrs: {
    pname = "prettier-plugin-svelte";
    version = "3.4.0";

    src = nixpkgs.fetchFromGitHub {
      owner = "sveltejs";
      repo = "prettier-plugin-svelte";
      rev = "7d68c92243a654ca0a35606dede44694941ad805";
      hash = "sha256-6DoMm7KpWUEDrnYE7K7l/dtYVEvVzfWgG0kkNl5m9Qk=";
    };

    dontNpmPrune = true;

    npmDepsHash = "sha256-MG1DiutTelg6GQwIbMya+mQTx6UoDoRHZvAkVYC9deI=";
  });
}
