export function Footer() {
  return (
    <footer className="py-8 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} EalyBooks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
