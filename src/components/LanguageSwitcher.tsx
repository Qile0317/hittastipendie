import Link from 'next/link';
import { Locale } from '../lib/i18n';

interface LanguageSwitcherProps {
  currentLang: Locale;
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  return (
    <div className="flex gap-2 text-sm">
      <Link 
        href="/sv"
        className={`px-2 py-1 rounded ${
          currentLang === 'sv' 
            ? 'bg-blue-600 text-white' 
            : 'text-blue-600 hover:bg-blue-50'
        }`}
      >
        Svenska
      </Link>
      <span className="text-neutral-400">|</span>
      <Link 
        href="/en"
        className={`px-2 py-1 rounded ${
          currentLang === 'en' 
            ? 'bg-blue-600 text-white' 
            : 'text-blue-600 hover:bg-blue-50'
        }`}
      >
        English
      </Link>
    </div>
  );
}
