{
  pkgs ? import <nixpkgs> {},
}:
pkgs.mkShell {
  name = "dev-env";
  packages = [
    pkgs.nodejs
  ];
  # export CPPFLAGS="$CPPFLAGS -O"
  shellHook = ''
  echo "Start deveoping ..."
  '';
}
