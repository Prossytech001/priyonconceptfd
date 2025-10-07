// "use client";
// import Link from "next/link";
// import { ChevronRight } from "lucide-react";

// export default function Breadcrumbs({ category, subCategory, productName }: any) {
//   const crumbs = [
//     { label: "Home", href: "/" },
//     { label: category, href: `/shop?category=${category}` },
//     ...(subCategory ? [{ label: subCategory, href: `/shop?category=${category}&sub=${subCategory}` }] : []),
//     { label: productName },
//   ];

//   return (
//     <nav className="text-sm text-gray-500 mb-6">
//       <ul className="flex items-center flex-wrap gap-1">
//         {crumbs.map((crumb, i) => (
//           <li key={i} className="flex items-center gap-1">
//             {crumb.href ? (
//               <Link
//                 href={crumb.href}
//                 className="hover:text-[var(--color-burgundy)] capitalize transition-colors"
//               >
//                 {crumb.label}
//               </Link>
//             ) : (
//               <span className="capitalize text-gray-700">{crumb.label}</span>
//             )}
//             {i < crumbs.length - 1 && (
//               <ChevronRight className="w-4 h-4 text-gray-400" />
//             )}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }
"use client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbProps = {
  category?: string;
  subCategory?: string;
  productName?: string;
  currentPage?: string;
};

export default function Breadcrumbs({
  category,
  subCategory,
  productName,
  currentPage,
}: BreadcrumbProps) {
  const crumbs = [{ label: "Home", href: "/" }];

  if (category)
    crumbs.push({
      label: category,
      href: `/shop?category=${category}`,
    });

  if (subCategory)
    crumbs.push({
      label: subCategory,
      href: `/shop?category=${category}&sub=${subCategory}`,
    });

  if (currentPage && !productName)
    crumbs.push({ label: currentPage, href: "" });

  if (productName)
    crumbs.push({
      label: productName,
      href: "",
    });

  return (
    <nav className="text-sm text-gray-500 mb-6">
      <ul className="flex items-center flex-wrap gap-1">
        {crumbs.map((crumb, i) => (
          <li key={i} className="flex items-center gap-1">
            {crumb.href ? (
              <Link
                href={crumb.href}
                className="hover:text-[var(--color-burgundy)] capitalize transition-colors"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="capitalize text-gray-700">{crumb.label}</span>
            )}
            {i < crumbs.length - 1 && (
              <ChevronRight className="w-4 h-4 text-gray-400" />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
