interface LogoProps {
  active?: boolean
}

function Logo({ active = false }: LogoProps) {
  return (
    <div className="flex items-center gap-1.5 font-[900] leading-none">
      <div
        className={`border-box flex h-8 w-8 items-center justify-center rounded-lg border ${
          active === true
            ? 'border-cornflower-blue-500 bg-cornflower-blue-500 dark:border-cornflower-blue-500 dark:bg-cornflower-blue-500'
            : 'border-cornflower-blue-500 dark:border-cornflower-blue-500'
        }`}
      >
        RK;
      </div>
    </div>
  )
}

export default Logo
