'use client';

import { useId } from 'react';
import { EDITIONS, isEdition, productLabel } from '@/lib/products';

/**
 * Customer-facing payment pages. These intentionally copy the look of the QuickBooks Enterprises payment
 * flow (light cards, green stepper, "Complete Your Payment" layout) and use plain Tailwind gray/green
 * utilities rather than the site's dark theme tokens, so they render the same in either theme.
 */

export const GREEN = '#2ca01c';

export function PayShell({ children, stepper }: { children: React.ReactNode; stepper?: number }) {
  return (
    <div className="min-h-screen bg-white text-gray-900 [color-scheme:light]">
      {stepper ? <PayStepper current={stepper} /> : null}
      {children}
    </div>
  );
}

export function PayStepper({ current }: { current: number }) {
  const steps = ['Login', 'Review', 'Payment'];
  return (
    <div className="w-full bg-gray-100 px-5 py-10">
      <ol className="flex max-w-[700px] mx-auto items-center justify-center">
        {steps.map((label, index) => {
          const n = index + 1;
          const status = n < current ? 'completed' : n === current ? 'current' : 'pending';
          const last = index === steps.length - 1;
          return (
            <li
              key={label}
              className={`flex items-center ${
                !last
                  ? `after:content-[''] w-full after:w-full after:h-1 after:border-b-4 after:inline-block ${status === 'completed' ? 'after:border-[#2ca01c]' : 'after:border-gray-400'}`
                  : 'w-fit'
              }`}
            >
              <div
                className={`flex relative items-center justify-center w-10 h-10 lg:h-12 lg:w-12 rounded-full shrink-0 ring-4 ${
                  status === 'completed'
                    ? 'bg-[#2ca01c] text-white ring-green-500'
                    : status === 'current'
                      ? 'bg-white text-[#2ca01c] ring-[#2ca01c]'
                      : 'bg-gray-100 text-gray-500 ring-gray-400'
                }`}
              >
                {status === 'completed' ? (
                  <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4" aria-hidden="true" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
                ) : (
                  <span className="text-sm lg:text-base font-semibold">{n}</span>
                )}
                <span className="text-sm lg:text-base text-black font-semibold absolute top-14 text-center">{label}</span>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export function Disclaimer({ className = '' }: { className?: string }) {
  return (
    <p className={`text-[10px] leading-snug text-gray-400 ${className}`}>
      QuickBooks is a registered trademark of Intuit Inc.
    </p>
  );
}

const input =
  'w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2ca01c] focus:border-transparent';
const selectArrow = {
  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
  backgroundPosition: 'right 0.5rem center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '1.5em 1.5em',
  paddingRight: '2.5rem',
};

function Field({ label, children, htmlFor }: { label: string; children: React.ReactNode; htmlFor: string }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      {children}
    </div>
  );
}

type OnChange = (field: string, value: string) => void;

export function CompanyInfo({ companyName, ein, onChange }: { companyName: string; ein: string; onChange: OnChange }) {
  const id = useId();
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Company information</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Company name" htmlFor={`${id}-company`}>
          <input required id={`${id}-company`} type="text" value={companyName} onChange={(e) => onChange('companyName', e.target.value)} className={input} />
        </Field>
        <Field label="EIN" htmlFor={`${id}-ein`}>
          <input
            required
            id={`${id}-ein`}
            type="text"
            inputMode="numeric"
            placeholder="12-3456789"
            pattern="\d{2}-\d{7}"
            title="Format must be 9 digits: 12-3456789"
            value={ein}
            onChange={(e) => {
              let val = e.target.value.replace(/\D/g, '').slice(0, 9);
              if (val.length > 2) val = val.slice(0, 2) + '-' + val.slice(2);
              onChange('ein', val);
            }}
            className={input}
          />
        </Field>
      </div>
    </div>
  );
}

export function ContactInfo(props: { email: string; phone: string; firstName: string; lastName: string; onChange: OnChange }) {
  const { email, phone, firstName, lastName, onChange } = props;
  const id = useId();
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-2">Contact information</h2>
      <p className="text-sm text-gray-600 mb-6">Contact used for this order</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Field label="Email" htmlFor={`${id}-email`}>
          <input required id={`${id}-email`} type="email" value={email} onChange={(e) => onChange('email', e.target.value)} className={input} />
        </Field>
        <Field label="Phone number" htmlFor={`${id}-phone`}>
          <input required id={`${id}-phone`} type="tel" minLength={8} maxLength={20} value={phone} onChange={(e) => onChange('phone', e.target.value)} className={input} />
        </Field>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="First name" htmlFor={`${id}-first`}>
          <input required id={`${id}-first`} type="text" value={firstName} onChange={(e) => onChange('firstName', e.target.value)} className={input} />
        </Field>
        <Field label="Last name" htmlFor={`${id}-last`}>
          <input required id={`${id}-last`} type="text" value={lastName} onChange={(e) => onChange('lastName', e.target.value)} className={input} />
        </Field>
      </div>
    </div>
  );
}

const COUNTRIES: [string, string][] = [
  ['US', 'United States'], ['AU', 'Australia'], ['NZ', 'New Zealand'], ['GB', 'United Kingdom'], ['CA', 'Canada'],
  ['IN', 'India'], ['SG', 'Singapore'], ['AE', 'United Arab Emirates'], ['IE', 'Ireland'], ['DE', 'Germany'],
  ['FR', 'France'], ['NL', 'Netherlands'], ['ZA', 'South Africa'], ['PH', 'Philippines'], ['MY', 'Malaysia'],
  ['HK', 'Hong Kong'], ['JP', 'Japan'], ['PK', 'Pakistan'], ['BD', 'Bangladesh'], ['LK', 'Sri Lanka'],
];
const US_STATES: [string, string][] = [
  ['AL', 'Alabama'],
  ['AK', 'Alaska'],
  ['AZ', 'Arizona'],
  ['AR', 'Arkansas'],
  ['CA', 'California'],
  ['CO', 'Colorado'],
  ['CT', 'Connecticut'],
  ['DE', 'Delaware'],
  ['DC', 'District of Columbia'],
  ['FL', 'Florida'],
  ['GA', 'Georgia'],
  ['HI', 'Hawaii'],
  ['ID', 'Idaho'],
  ['IL', 'Illinois'],
  ['IN', 'Indiana'],
  ['IA', 'Iowa'],
  ['KS', 'Kansas'],
  ['KY', 'Kentucky'],
  ['LA', 'Louisiana'],
  ['ME', 'Maine'],
  ['MD', 'Maryland'],
  ['MA', 'Massachusetts'],
  ['MI', 'Michigan'],
  ['MN', 'Minnesota'],
  ['MS', 'Mississippi'],
  ['MO', 'Missouri'],
  ['MT', 'Montana'],
  ['NE', 'Nebraska'],
  ['NV', 'Nevada'],
  ['NH', 'New Hampshire'],
  ['NJ', 'New Jersey'],
  ['NM', 'New Mexico'],
  ['NY', 'New York'],
  ['NC', 'North Carolina'],
  ['ND', 'North Dakota'],
  ['OH', 'Ohio'],
  ['OK', 'Oklahoma'],
  ['OR', 'Oregon'],
  ['PA', 'Pennsylvania'],
  ['RI', 'Rhode Island'],
  ['SC', 'South Carolina'],
  ['SD', 'South Dakota'],
  ['TN', 'Tennessee'],
  ['TX', 'Texas'],
  ['UT', 'Utah'],
  ['VT', 'Vermont'],
  ['VA', 'Virginia'],
  ['WA', 'Washington'],
  ['WV', 'West Virginia'],
  ['WI', 'Wisconsin'],
  ['WY', 'Wyoming'],
];
const AU_STATES = ['ACT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC', 'WA'];

export function BusinessAddress(props: { country: string; address: string; zipCode: string; city: string; state: string; onChange: OnChange }) {
  const { country, address, zipCode, city, state, onChange } = props;
  const id = useId();
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-2">Business address</h2>
      <p className="text-sm text-gray-600 mb-6">Address used for this order.</p>
      <div className="space-y-4">
        <Field label="Country" htmlFor={`${id}-country`}>
          <select required id={`${id}-country`} value={country} onChange={(e) => { onChange('country', e.target.value); onChange('state', ''); }} className={`${input} appearance-none`} style={selectArrow}>
            {COUNTRIES.map(([code, name]) => <option key={code} value={code}>{name}</option>)}
          </select>
        </Field>
        <Field label="Address" htmlFor={`${id}-address`}>
          <input required id={`${id}-address`} type="text" placeholder="Enter street address" value={address} onChange={(e) => onChange('address', e.target.value)} className={input} />
        </Field>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label={country === 'US' ? 'ZIP code' : 'Postcode'} htmlFor={`${id}-zip`}>
            <input required id={`${id}-zip`} type="text" placeholder={country === 'US' ? 'Enter ZIP code' : 'Enter postcode'} value={zipCode} onChange={(e) => onChange('zipCode', e.target.value)} className={input} />
          </Field>
          <Field label="City" htmlFor={`${id}-city`}>
            <input required id={`${id}-city`} type="text" placeholder="Enter city" value={city} onChange={(e) => onChange('city', e.target.value)} className={input} />
          </Field>
        </div>
        <Field label="State" htmlFor={`${id}-state`}>
          {country === 'US' ? (
            <select required id={`${id}-state`} value={state} onChange={(e) => onChange('state', e.target.value)} className={`${input} appearance-none`} style={selectArrow}>
              <option value="">Select a state</option>
              {US_STATES.map(([code, name]) => <option key={code} value={code}>{name}</option>)}
            </select>
          ) : country === 'AU' ? (
            <select required id={`${id}-state`} value={state} onChange={(e) => onChange('state', e.target.value)} className={`${input} appearance-none`} style={selectArrow}>
              <option value="">Select a state</option>
              {AU_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          ) : (
            <input id={`${id}-state`} type="text" placeholder="State / region" value={state} onChange={(e) => onChange('state', e.target.value)} className={input} />
          )}
        </Field>
      </div>
    </div>
  );
}

export interface SummaryLink {
  productName: string;
  amount: number;
  currency: string;
  plan?: { product: string; users?: number; years?: number; basePrice: number; discount: number };
}

const money = (n: number, currency: string) => new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(n);

export function OrderSummary({ link }: { link: SummaryLink }) {
  const plan = link.plan;
  const edition = plan && isEdition(plan.product) ? EDITIONS.find((e) => e.value === plan.product) : null;
  const imageSrc = edition && plan?.years ? `/${edition.value}_${plan.years}y.${edition.value === 'silver' && plan.years === 3 ? 'png' : 'webp'}` : null;
  const base = plan ? plan.basePrice : link.amount;
  const discount = plan ? plan.discount : 0;

  return (
    <div className="bg-gray-50 rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
      <div className="space-y-4">
        {imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imageSrc} alt={link.productName} className="w-full" />
        ) : (
          <div className="flex justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/quickbooks_logo.png" alt="QuickBooks" className="max-h-16 object-contain" />
          </div>
        )}

        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="font-medium text-gray-900">{edition ? `QuickBooks Enterprise ${edition.name} Edition` : plan ? productLabel(plan.product) : link.productName}</h3>
            {edition && plan ? (
              <div className="text-sm text-blue-600 space-x-1 mt-1">
                <span>Edition: {edition.name}</span><span>|</span><span>Users: {plan.users}</span><span>|</span><span>Years: {plan.years}</span>
              </div>
            ) : (
              <div className="text-sm text-blue-600 mt-1 font-medium">Professional Service</div>
            )}
          </div>
          <p className="font-semibold text-gray-900 whitespace-nowrap">{money(base, link.currency)}</p>
        </div>

        {discount > 0 && (
          <div className="border border-dashed border-green-400 rounded-md bg-green-50 p-4 mt-4">
            <p className="text-sm text-green-700 font-medium">Discount Applied</p>
            <p className="mt-1 text-sm text-gray-800">💸 You saved <strong>{money(discount, link.currency)}</strong> today.</p>
          </div>
        )}

        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-900">Total due today</span>
            <span className="text-lg font-bold text-gray-900">{money(link.amount, link.currency)} <span className="text-xs font-semibold text-gray-500">{link.currency}</span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
