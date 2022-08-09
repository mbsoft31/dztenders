import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Services', href: '/services' },
]

const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
]

export default function Header() {
  return (
    <>
      <div className="hidden border-b border-gray-200 bg-gray-100 px-6 pt-2 pb-2 sm:flex sm:items-center sm:justify-end">
        <div className="flex space-x-6 md:order-2">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="inline-flex items-center text-gray-500 hover:text-gray-700"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
          <a href={'#'} className="text-gray-500 hover:text-gray-700">
            Contact us
          </a>
          <select
            id="location"
            name="location"
            className="rounded-md border-gray-200 py-0.5 pl-2 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue="English"
          >
            <option>English</option>
            <option>Français</option>
            <option>العربية</option>
          </select>
        </div>
      </div>
      <header className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="relative z-50 flex justify-between">
            <div className="flex items-center md:gap-x-12">
              <a aria-label="Home" href="/#">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 109 40"
                  className="h-10 w-auto"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 20c0 11.046 8.954 20 20 20s20-8.954 20-20S31.046 0 20 0 0 8.954 0 20Zm20 16c-7.264 0-13.321-5.163-14.704-12.02C4.97 22.358 6.343 21 8 21h24c1.657 0 3.031 1.357 2.704 2.98C33.32 30.838 27.264 36 20 36Z"
                    fill="#2563EB"
                  ></path>
                  <path
                    d="M55.528 26.57V15.842H52V13.97h9.108v1.872h-3.636V26.57h-1.944Z"
                    fill="#0F172A"
                  ></path>
                  <path
                    d="M83.084 26.57v-12.6h5.346c.744 0 1.416.18 2.016.54a3.773 3.773 0 0 1 1.44 1.44c.36.612.54 1.302.54 2.07 0 .78-.18 1.482-.54 2.106a4 4 0 0 1-1.44 1.494c-.6.36-1.272.54-2.016.54h-2.646v4.41h-2.7Zm2.664-6.84h2.376c.288 0 .546-.072.774-.216.228-.156.408-.36.54-.612a1.71 1.71 0 0 0 .216-.864c0-.324-.072-.606-.216-.846a1.394 1.394 0 0 0-.54-.576 1.419 1.419 0 0 0-.774-.216h-2.376v3.33ZM106.227 26.57V13.25h2.556v13.32h-2.556Z"
                    fill="#2563EB"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M95.906 26.102c.636.432 1.35.648 2.142.648.444 0 .864-.066 1.26-.198a4.25 4.25 0 0 0 1.062-.558 3.78 3.78 0 0 0 .702-.668v1.244h2.574v-9.522h-2.538v1.248a3.562 3.562 0 0 0-.648-.672 3.13 3.13 0 0 0-1.026-.558 3.615 3.615 0 0 0-1.278-.216c-.828 0-1.566.216-2.214.648-.648.42-1.164 1.002-1.548 1.746-.372.732-.558 1.578-.558 2.538 0 .96.186 1.812.558 2.556.372.744.876 1.332 1.512 1.764Zm4.104-1.908c-.36.228-.78.342-1.26.342-.468 0-.882-.114-1.242-.342a2.387 2.387 0 0 1-.828-.954c-.204-.42-.306-.906-.306-1.458 0-.54.102-1.014.306-1.422.204-.408.48-.726.828-.954.36-.24.774-.36 1.242-.36.48 0 .9.12 1.26.36.36.228.636.546.828.954.204.408.306.882.306 1.422 0 .552-.102 1.038-.306 1.458a2.218 2.218 0 0 1-.828.954Z"
                    fill="#2563EB"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="m76.322 23.197 2.595 3.373h2.268l-3.662-4.787 3.338-4.663h-2.196l-2.162 3.334-2.554-3.334h-2.34l3.652 4.71-3.634 4.74h2.196l2.5-3.373ZM62.738 26.102a3.78 3.78 0 0 0 2.142.648c.456 0 .888-.072 1.296-.216.42-.144.798-.336 1.134-.576a3.418 3.418 0 0 0 .864-.835v1.447h1.872v-9.45h-1.872v1.45a3.118 3.118 0 0 0-.72-.82 3.2 3.2 0 0 0-1.062-.612 4.033 4.033 0 0 0-1.35-.216c-.828 0-1.578.21-2.25.63-.66.42-1.188 1.002-1.584 1.746-.384.732-.576 1.572-.576 2.52 0 .936.192 1.776.576 2.52.384.744.894 1.332 1.53 1.764Zm4.122-1.476c-.432.276-.93.414-1.494.414a2.682 2.682 0 0 1-1.476-.414 2.987 2.987 0 0 1-1.008-1.134c-.24-.492-.36-1.05-.36-1.674 0-.612.12-1.158.36-1.638.252-.48.588-.858 1.008-1.134a2.682 2.682 0 0 1 1.476-.414c.564 0 1.062.138 1.494.414.432.276.768.654 1.008 1.134.252.48.378 1.026.378 1.638 0 .624-.126 1.182-.378 1.674-.24.48-.576.858-1.008 1.134Z"
                    fill="#0F172A"
                  ></path>
                </svg>
              </a>
              <div className="hidden md:flex md:gap-x-6">
                <a
                  className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  href="/#features"
                >
                  Features
                </a>
                <a
                  className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  href="/#testimonials"
                >
                  Testimonials
                </a>
                <a
                  className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  href="/#pricing"
                >
                  Pricing
                </a>
              </div>
            </div>
            <div className="flex items-center gap-x-5 md:gap-x-8">
              <div className="hidden md:block">
                <a
                  className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  href="/login"
                >
                  Sign in
                </a>
              </div>
              <a
                className="group inline-flex items-center justify-center rounded-full bg-blue-600 py-2 px-4 text-sm font-semibold text-white hover:bg-blue-500 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-800 active:text-blue-100"
                href="/register"
              >
                <span>
                  Get started <span className="hidden lg:inline">today</span>
                </span>
              </a>
              <div className="-mr-1 md:hidden">
                <div>
                  <button
                    className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle Navigation"
                    id="headlessui-popover-button-:r0:"
                    type="button"
                    aria-expanded="false"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
                      fill="none"
                      stroke-width="2"
                      stroke-linecap="round"
                    >
                      <path
                        d="M0 1H14M0 7H14M0 13H14"
                        className="origin-center transition"
                      ></path>
                      <path
                        d="M2 2L12 12M12 2L2 12"
                        className="origin-center scale-90 opacity-0 transition"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
