import { ReactNode } from "react";

export default async function layout({children}: {children: ReactNode}) {
  return (
    <div className="flex size-full flex-col justify-between">
      <div className="header bg-amber-50 w-full h-5"> header</div>
      {children}
      <div className="header bg-amber-50 w-full h-5"> footer</div>
      </div>
  )
}
