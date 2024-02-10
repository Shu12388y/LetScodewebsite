"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";
export const products = [
  {
    title: "Blind 75 Leetcode Challenge",
    link: "https://github.com/Lets-code-with-us/DSA-Cracker/tree/main/Blind%2075%20LeetCode",
    thumbnail:
      "https://img.playbook.com/zsOvKXZtSaJH0sv70za3-DwgZF3D-uM_-dp5sNDXMD0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzViNjBjNTEx/LTA5ZGMtNDRiNC1i/ZDFjLWNlMzRmMDc2/MTIxMg",
  },
  {
    title: "Meme Genrator",
    link: "https://github.com/avinash201199/MemeGenerator",
    thumbnail:
      "https://img.playbook.com/k9I30hNadvKuqaXGOAoDAo51t42E2bXi5j_bcMmR1IM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2JhOWQ3MWIx/LTc0ZjctNDRmMi1h/OGM4LTA3YTJjMWM2/NzhlOQ",
  },
  {
    title: "Competition and program list ",
    link: "https://github.com/avinash201199/Competitions-and-Programs-List",
    thumbnail:
      "https://img.playbook.com/4bVK6c24d1trRo8RoQR23h65j8ryrneKX1Q9hG-dAww/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzdhNjFjY2I5/LTJmNTQtNGU2My1h/MWY0LTczYjFmM2E3/NzU4YQ",
  },

  {
    title: "Free courses with certificates",
    link: " https://free-courses-with-certificates.netlify.app/",
    thumbnail:
      "https://img.playbook.com/K4rinAjjhZs3y95xt6N3AavrhASHB3BVj-TBLnBQ8rk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzE0ODgxMGQy/LTAyMjItNDRhMS1i/NjkxLTU1ZGUwZjU0/NjcxZA",
  },
  {
    title: "Blind 75 Leetcode Challenge",
    link: "https://github.com/Lets-code-with-us/DSA-Cracker/tree/main/Blind%2075%20LeetCode",
    thumbnail:
      "https://img.playbook.com/zsOvKXZtSaJH0sv70za3-DwgZF3D-uM_-dp5sNDXMD0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzViNjBjNTEx/LTA5ZGMtNDRiNC1i/ZDFjLWNlMzRmMDc2/MTIxMg",
  },
  {
    title: "Meme Genrator",
    link: "https://github.com/avinash201199/MemeGenerator",
    thumbnail:
      "https://img.playbook.com/k9I30hNadvKuqaXGOAoDAo51t42E2bXi5j_bcMmR1IM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2JhOWQ3MWIx/LTc0ZjctNDRmMi1h/OGM4LTA3YTJjMWM2/NzhlOQ",
  },
  {
    title: "Competition and program list ",
    link: "https://github.com/avinash201199/Competitions-and-Programs-List",
    thumbnail:
      "https://img.playbook.com/4bVK6c24d1trRo8RoQR23h65j8ryrneKX1Q9hG-dAww/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzdhNjFjY2I5/LTJmNTQtNGU2My1h/MWY0LTczYjFmM2E3/NzU4YQ",
  },

  {
    title: "Free courses with certificates",
    link: " https://free-courses-with-certificates.netlify.app/",
    thumbnail:
      "https://img.playbook.com/K4rinAjjhZs3y95xt6N3AavrhASHB3BVj-TBLnBQ8rk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzE0ODgxMGQy/LTAyMjItNDRhMS1i/NjkxLTU1ZGUwZjU0/NjcxZA",
  },
  {
    title: "Blind 75 Leetcode Challenge",
    link: "https://github.com/Lets-code-with-us/DSA-Cracker/tree/main/Blind%2075%20LeetCode",
    thumbnail:
      "https://img.playbook.com/zsOvKXZtSaJH0sv70za3-DwgZF3D-uM_-dp5sNDXMD0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzViNjBjNTEx/LTA5ZGMtNDRiNC1i/ZDFjLWNlMzRmMDc2/MTIxMg",
  },
  {
    title: "Meme Genrator",
    link: "https://github.com/avinash201199/MemeGenerator",
    thumbnail:
      "https://img.playbook.com/k9I30hNadvKuqaXGOAoDAo51t42E2bXi5j_bcMmR1IM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2JhOWQ3MWIx/LTc0ZjctNDRmMi1h/OGM4LTA3YTJjMWM2/NzhlOQ",
  },
  {
    title: "Competition and program list ",
    link: "https://github.com/avinash201199/Competitions-and-Programs-List",
    thumbnail:
      "https://img.playbook.com/4bVK6c24d1trRo8RoQR23h65j8ryrneKX1Q9hG-dAww/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzdhNjFjY2I5/LTJmNTQtNGU2My1h/MWY0LTczYjFmM2E3/NzU4YQ",
  },

  {
    title: "Free courses with certificates",
    link: " https://free-courses-with-certificates.netlify.app/",
    thumbnail:
      "https://img.playbook.com/K4rinAjjhZs3y95xt6N3AavrhASHB3BVj-TBLnBQ8rk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzE0ODgxMGQy/LTAyMjItNDRhMS1i/NjkxLTU1ZGUwZjU0/NjcxZA",
  },

  {
    title: "Blind 75 Leetcode Challenge",
    link: "https://github.com/Lets-code-with-us/DSA-Cracker/tree/main/Blind%2075%20LeetCode",
    thumbnail:
      "https://img.playbook.com/zsOvKXZtSaJH0sv70za3-DwgZF3D-uM_-dp5sNDXMD0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzViNjBjNTEx/LTA5ZGMtNDRiNC1i/ZDFjLWNlMzRmMDc2/MTIxMg",
  },
  {
    title: "Meme Genrator",
    link: "https://github.com/avinash201199/MemeGenerator",
    thumbnail:
      "https://img.playbook.com/k9I30hNadvKuqaXGOAoDAo51t42E2bXi5j_bcMmR1IM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2JhOWQ3MWIx/LTc0ZjctNDRmMi1h/OGM4LTA3YTJjMWM2/NzhlOQ",
  },
  {
    title: "Competition and program list ",
    link: "https://github.com/avinash201199/Competitions-and-Programs-List",
    thumbnail:
      "https://img.playbook.com/4bVK6c24d1trRo8RoQR23h65j8ryrneKX1Q9hG-dAww/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzdhNjFjY2I5/LTJmNTQtNGU2My1h/MWY0LTczYjFmM2E3/NzU4YQ",
  },

  {
    title: "Free courses with certificates",
    link: " https://free-courses-with-certificates.netlify.app/",
    thumbnail:
      "https://img.playbook.com/K4rinAjjhZs3y95xt6N3AavrhASHB3BVj-TBLnBQ8rk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzE0ODgxMGQy/LTAyMjItNDRhMS1i/NjkxLTU1ZGUwZjU0/NjcxZA",
  },
];

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
