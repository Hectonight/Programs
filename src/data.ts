export interface embed_data {
  name: string;
  website: string;
  img: string;
}

let data: embed_data[] = [
  {
    name: "Python",
    website: "https://www.python.org/",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    name: "React",
    website: "https://reactjs.org/",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Vue",
    website: "https://vuejs.org/",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
  },
  {
    name: "Github",
    website: "https://github.com",
    img: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  },
  {
    name: "Gitlab",
    website: "https://gitlab.com/",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/35/GitLab_icon.svg",
  },
  {
    name: "Typescript",
    website: "https://www.typescriptlang.org/",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    name: "Vite",
    website: "https://vitejs.dev/",
    img: "../vite.svg",
  },
  {
    name: "JavaScript",
    website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
  },
  {
    name: "Lit",
    website: "https://lit.dev/",
    img: "https://seeklogo.com/images/L/lit-logo-6B43868CDC-seeklogo.com.png",
  },
  {
    name: "Preact",
    website: "https://preactjs.com/",
    img: "https://preactjs.com/assets/app-icon.png",
  },
  {
    name: "Svelte",
    website: "https://svelte.dev/",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
  },
  {
    name: "Go",
    website: "https://go.dev/",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
  },
  {
    name: "Astro",
    website: "https://astro.js.org/",
    img: "https://astro.js.org/astro.png",
  },
  {
    name: "JQuery",
    website: "https://jquery.com/",
    img: "https://seeklogo.com/images/J/jquery-logo-CFE6ECE363-seeklogo.com.png",
  },
  {
    name: "C",
    website: "https://en.cppreference.com/w/c/language",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
  },
  {
    name: "C++",
    website: "https://en.cppreference.com/w/cpp/language",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
  },
  {
    name: "Objective-C",
    website:
      "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html",
    img: "https://www.hackingwithswift.com/img/objc_logo.png",
  },
  {
    name: "Rust",
    website: "https://www.rust-lang.org/",
    img: "http://rust-lang.org/logos/rust-logo-512x512.png",
  },
  {
    name: "GraphQL",
    website: "https://graphql.org/",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
  },
  {
    name: "HTML",
    website: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    img: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
  },
  {
    name: "CSS",
    website: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
  },
  {
    name: "C#",
    website: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg",
  },
  {
    name: "Sass",
    website: "https://sass-lang.com/",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
  },
  {
    name: "MySQL",
    website: "https://www.mysql.com/",
    img: "https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg",
  },
  {
    name: "PHP",
    website: "https://www.php.net/",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
  },
  {
    name: "Bash",
    website: "https://www.gnu.org/software/bash/",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg",
  },
  {
    name: "MacOS",
    website: "https://www.apple.com/macos/monterey/",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Finder_Icon_macOS_Big_Sur.png",
  },
  {
    name: "Windows",
    website: "https://www.microsoft.com/en-us/windows",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/87/Windows_logo_-_2021.svg",
  },
  {
    name: "Linux",
    website: "https://www.linux.org/",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b0/NewTux.svg",
  },
  {
    name: "PowerShell",
    website: "https://learn.microsoft.com/en-us/powershell/",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/PowerShell_5.0_icon.png",
  },
  {
    name: "Ruby",
    website: "https://www.ruby-lang.org/en/",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg",
  },
  {
    name: "Firebase",
    website: "https://firebase.google.com/",
    img: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
  },
  {
    name: "Angular",
    website: "https://angular.io/",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
  },
  {
    name: "Java",
    website: "https://www.java.com/en/",
    img: "https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png",
  },
  {
    name: "Django",
    website: "https://www.djangoproject.com/",
    img: "https://seeklogo.com/images/D/django-logo-4C5ECF7036-seeklogo.com.png",
  },
  {
    name: "REST API",
    website: "https://restfulapi.net/",
    img: "https://keenethics.com/wp-content/uploads/2022/01/rest-api-1.svg",
  },
  {
    name: "Red Hat",
    website: "https://www.redhat.com/en",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Red_Hat_logo.svg",
  },
  {
    name: "R",
    website: "https://www.r-project.org/",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1448px-R_logo.svg.png?20160212050515",
  },
  {
    name: "Git",
    website: "https://git-scm.com/",
    img: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
  },
  {
    name: "Webpack",
    website: "https://webpack.js.org/",
    img: "https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png",
  },
  {
    name: "Swift",
    website: "https://developer.apple.com/swift/",
    img: "https://cdn4.iconfinder.com/data/icons/logos-3/504/Swift-2-512.png",
  },
  {
    name: "Kotlin",
    website: "https://kotlinlang.org/",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/06/Kotlin_Icon.svg",
  },
  {
    name: "Visual Basic",
    website:
      "https://learn.microsoft.com/en-us/previous-versions/visualstudio/visual-basic-6/visual-basic-6.0-documentation?redirectedfrom=MSDN",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/VB.NET_Logo.svg/1024px-VB.NET_Logo.svg.png?20210603083010",
  },
  {
    name: "Babel",
    website: "https://babeljs.io/",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/02/Babel_Logo.svg",
  },
  {
    name: "Docker",
    website: "https://www.docker.com/",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
  },
  {
    name: "Node",
    website: "https://nodejs.org/en/",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "Markdown",
    website: "https://daringfireball.net/projects/markdown/",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/51/Octicons-markdown.svg",
  },
  {
    name: "Pip",
    website: "https://pypi.org/project/pip/",
    img: "https://networkdirection.net/wp-content/uploads/python/pip-logo.svg",
  },
  {
    name: "Batch",
    website:
      "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands",
    img: "https://2.bp.blogspot.com/-77WVbk40_jw/WRBbMVYkZ6I/AAAAAAAABXA/oqgYkB5aouQ1nJWn-AaKv5EMGaB3-F3fwCLcB/s1600/console-png-image-54128.png",
  },
  {
    name: "Julia",
    website: "https://julialang.org/",
    img: "https://avatars.githubusercontent.com/u/743164?s=280&v=4",
  },
  {
    name: "MATLAB",
    website: "https://www.mathworks.com/products/matlab.html",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png",
  },
  {
    name: "Assembly x86",
    website: "https://docs.oracle.com/cd/E19253-01/817-5477/817-5477.pdf",
    img: "https://raw.githubusercontent.com/github/explore/e495457f5ff28c343f9e422f8e3cf80fd3e80890/topics/assembly/assembly.png",
  },
  {
    name: "Unity",
    website: "https://unity.com/",
    img: "https://www.nicepng.com/png/full/127-1274512_unity-transparent-white-png-unity.png",
  },
  {
    name: "JSON",
    website: "https://www.json.org/json-en.html",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/JSON_vector_logo.svg",
  },
  {
    name: "YAML",
    website: "https://yaml.org/",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Official_YAML_Logo.svg/128px-Official_YAML_Logo.svg.png",
  },
  {
    name: "Haskell",
    website: "https://www.haskell.org/",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968259.png",
  },
  {
    name: "Carbon",
    website: "https://github.com/carbon-language/carbon-lang",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Carbon_logo.png",
  },
  {
    name: "Lua",
    website: "https://www.lua.org/",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg",
  },
  {
    name: "Web Assembly",
    website: "https://webassembly.org/",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1f/WebAssembly_Logo.svg",
  },
  {
    name: "Tailwind",
    website: "https://tailwindcss.com/",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
  },
  {
    name: "Flutter",
    website: "https://flutter.dev/",
    img: "https://user-images.githubusercontent.com/51419598/152648731-567997ec-ac1c-4a9c-a816-a1fb1882abbe.png",
  },
  {
    name: "Dart",
    website: "https://dart.dev/",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png",
  },
  {
    name: "PostgreSQL",
    website: "https://www.postgresql.org/",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png",
  },
  {
    name: "SQL Server",
    website:
      "https://learn.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver16",
    img: "https://www.sqlservertutorial.net/wp-content/uploads/sql-server-tutorial.svg",
  },
  {
    name: "TensorFlow",
    website: "https://www.tensorflow.org/",
    img: "https://www.kubeflow.org/docs/images/logos/TensorFlow.png",
  },
  {
    name: "Zsh",
    website: "https://www.zsh.org/",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Z_Shell_Logo_Color_Horizontal.svg/1200px-Z_Shell_Logo_Color_Horizontal.svg.png",
  },
  {
    name: "SVG",
    website: "https://developer.mozilla.org/en-US/docs/Web/SVG",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SVG_Logo.svg/1200px-SVG_Logo.svg.png",
  },
  {
    name: "Visual Studio Code",
    website: "https://code.visualstudio.com/",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
  },
  {
    name: "Jetbrains IDEs",
    website: "https://www.jetbrains.com/products/#type=ide-vs",
    img: "https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.png",
  },
  {
    name: "Visual Studio",
    website: "https://visualstudio.microsoft.com/",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Visual_Studio_Icon_2019.svg/1200px-Visual_Studio_Icon_2019.svg.png",
  },
  {
    name: "Vim",
    website: "https://www.vim.org/",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/1200px-Vimlogo.svg.png",
  },
  {
    name: "Eclipse",
    website: "https://www.eclipse.org",
    img: "https://cdn.freebiesupply.com/logos/large/2x/eclipse-11-logo-png-transparent.png",
  },
  {
    name: "Next.js",
    website: "https://nextjs.org/",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png",
  },
  {
    name: "AWS",
    website: "https://aws.amazon.com/",
    img: "https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png",
  },
  {
    name: "Github Copilot",
    website: "https://github.com/features/copilot",
    img: "https://seeklogo.com/images/G/github-copilot-logo-C25AFBDF08-seeklogo.com.png",
  },
  {
    name: "Neovim",
    website: "https://neovim.io/",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Neovim-mark.svg/1200px-Neovim-mark.svg.png",
  },
  {
    name: ".NET",
    website: "https://dotnet.microsoft.com/en-us/",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/1200px-Microsoft_.NET_logo.svg.png",
  },
  {
    name: "ESLint",
    website: "https://eslint.org/",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/1200px-ESLint_logo.svg.png",
  },
  {
    name: "NPM",
    website: "https://docs.npmjs.com/",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png",
  },
  {
    name: "Bun",
    website: "https://bun.sh/",
    img: "https://bun.sh/logo-square.png",
  },
  {
    name: "Curl",
    website: "https://curl.se/",
    img: "https://curl.se/logo/curl-logo.svg",
  },
  {
    name: "GCC",
    website: "https://gcc.gnu.org/",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/GNU_Compiler_Collection_logo.svg/1200px-GNU_Compiler_Collection_logo.svg.png",
  },
  {
    name: "CMake",
    website: "https://cmake.org/",
    img: "https://cmake.org/wp-content/uploads/2018/11/cmake_logo_slider.png",
  },
  {
    name: "Jekyll",
    website: "https://jekyllrb.com/",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/42/Jekyll_%28software%29_Logo.png",
  },
];

export default data;

/*
  {
    name: "_",
    website: "",
    img: "",
  },
  */
