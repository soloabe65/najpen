import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import AnimatedSection from '../components/AnimatedSection'

const naira = (value) =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
  }).format(value)

function genInvoiceNumber() {
  const d = new Date()
  return `NJE-${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}-${Math.floor(1000 + Math.random() * 9000)}`
}

const todayISO = () => new Date().toISOString().slice(0, 10)
const addDays = (iso, days) => {
  const d = new Date(iso + 'T12:00:00')
  d.setDate(d.getDate() + days)
  return d.toISOString().slice(0, 10)
}

function CurrencyInput({ value, onChange, placeholder = '0.00', className = '' }) {
  return (
    <input
      type="number"
      min="0"
      step="0.01"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`px-3 py-2 border border-[#E2E8F0] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40 bg-white ${className}`}
    />
  )
}

function TextInput({ label, value, onChange, placeholder, type = 'text' }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1.5 w-full px-3 py-2 border border-[#E2E8F0] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40 bg-white"
      />
    </label>
  )
}

function InvoiceItem({ label, value, onChange, placeholder, type = 'text' }) {
  return <TextInput label={label} value={value} onChange={onChange} placeholder={placeholder} type={type} />
}

function InvoicePage() {
  const [company, setCompany] = useState({
    name: 'NAJPEN GLOBAL INTEGRATED LTD',
    address: '10 Ogbanghankomi Close, Ajamimogha, Warri, Delta State',
    email: 'info@najpen.com',
    phone: '+2348033773159',
    rc: 'RC 9712455',
  })
  const [client, setClient] = useState({ company: '', name: '', address: '', email: '', phone: '' })
  const [invoiceNo, setInvoiceNo] = useState(genInvoiceNumber())
  const [issueDate, setIssueDate] = useState(todayISO())
  const [dueDate, setDueDate] = useState(addDays(todayISO(), 30))
  const [rows, setRows] = useState([
    { id: Date.now(), description: '', qty: '1', rate: '' },
  ])
  const [vatPct, setVatPct] = useState('7.5')
  const [discountPct, setDiscountPct] = useState('0')
  const [notes, setNotes] = useState('Payment due within 30 days. Cheques payable to NAJPEN GLOBAL INTEGRATED LTD.')

  const updateRow = (id, field, value) =>
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)))

  const addRow = () => setRows((prev) => [...prev, { id: Date.now(), description: '', qty: '1', rate: '' }])

  const removeRow = (id) => setRows((prev) => (prev.length > 1 ? prev.filter((r) => r.id !== id) : prev))

  const subtotal = rows.reduce((sum, r) => sum + (parseFloat(r.qty) || 0) * (parseFloat(r.rate) || 0), 0)
  const discount = subtotal * ((parseFloat(discountPct) || 0) / 100)
  const afterDiscount = subtotal - discount
  const vat = afterDiscount * ((parseFloat(vatPct) || 0) / 100)
  const total = afterDiscount + vat

  const field =
    'w-full px-3 py-2 border border-[#E2E8F0] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40 bg-white'

  const set = (obj, key) => (value) => setCompany((o) => ({ ...o, [key]: value }))

  return (
    <>
      <PageHeader
        eyebrow="INVOICES"
        title="Invoice Generator"
        description="Create a professional invoice for a client in seconds — add line items, tax, and print or save as PDF."
      />

      <AnimatedSection className="bg-[#F8FAFC] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-10">
            {/* ---- Builder form ---- */}
            <div className="xl:col-span-2 space-y-8">
              <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm p-7">
                <h3 className="font-bold text-[#0F172A] mb-5 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#EA580C] text-white text-xs flex items-center justify-center font-bold">1</span>
                  Company / Pay From
                </h3>
                <div className="space-y-4">
                  <InvoiceItem label="Company Name" value={company.name} onChange={set('name')} />
                  <InvoiceItem label="Address" value={company.address} onChange={set('address')} />
                  <div className="grid grid-cols-2 gap-4">
                    <InvoiceItem label="Email" value={company.email} onChange={set('email')} />
                    <InvoiceItem label="Phone" value={company.phone} onChange={set('phone')} />
                  </div>
                  <InvoiceItem label="RC Number" value={company.rc} onChange={set('rc')} />
                </div>
              </div>

              <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm p-6">
                <h2 className="font-bold text-[#0F172A] mb-5 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#EA580C] text-white text-xs flex items-center justify-center font-bold">02</span>
                  Client / Bill To
                </h2>
                <div className="space-y-4">
                  <InvoiceItem label="Company" value={client.name} onChange={(v) => setClient((o) => ({ ...o, name: v }))} placeholder="Client company" />
                  <InvoiceItem label="Contact Person" value={client.person} onChange={(v) => setClient((o) => ({ ...o, person: v }))} />
                  <InvoiceItem label="Address" value={client.address} onChange={(v) => setClient((o) => ({ ...o, address: v }))} />
                  <div className="grid grid-cols-2 gap-4">
                    <InvoiceItem label="Email" value={client.email} onChange={(v) => setClient((o) => ({ ...o, email: v }))} />
                    <InvoiceItem label="Phone" value={client.phone} onChange={(v) => setClient((o) => ({ ...o, phone: v }))} />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm p-6">
                <h2 className="font-bold text-[#0F172A] mb-5 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#EA580C] text-white text-xs flex items-center justify-center font-bold">03</span>
                  Invoice Meta
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">Invoice No.</span>
                    <input className={field} value={invoiceNo} onChange={(e) => setInvoiceNo(e.target.value)} />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">Issue Date</span>
                    <input type="date" className={field} value={issueDate} onChange={(e) => setIssueDate(e.target.value)} />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">Due Date</span>
                    <input type="date" className={field} value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">Currency</span>
                    <select className={field} defaultValue="NGN">
                      <option value="NGN">NGN (₦)</option>
                      <option value="USD">USD ($)</option>
                      <option value="GBP">GBP (£)</option>
                      <option value="EUR">EUR (€)</option>
                    </select>
                  </label>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm p-6">
                <h2 className="font-bold text-[#0F172A] mb-5 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#EA580C] text-white text-xs flex items-center justify-center font-bold">04</span>
                  Line Items
                </h2>
                <div className="space-y-4">
                  {rows.map((row) => (
                    <div key={row.id} className="space-y-2">
                      <input
                        className={field}
                        placeholder="Description (e.g. Fabrication services — March)"
                        value={row.description}
                        onChange={(e) => updateRow(row.id, 'description', e.target.value)}
                      />
                      <div className="grid grid-cols-12 gap-3 items-center">
                        <input
                          className={`${field} col-span-3`}
                          type="number"
                          min="1"
                          placeholder="Qty"
                          value={row.qty}
                          onChange={(e) => updateRow(row.id, 'qty', e.target.value)}
                        />
                        <CurrencyInput className={`${field} col-span-4`} value={row.rate} onChange={(v) => updateRow(row.id, 'rate', v)} />
                        <div className="col-span-3 text-sm text-[#0F172A] font-semibold">
                          {naira((parseFloat(row.qty) || 0) * (parseFloat(row.rate) || 0))}
                        </div>
                        <button
                          onClick={() => removeRow(row.id)}
                          className="col-span-2 w-8 h-8 rounded-md border border-red-200 text-red-600 hover:bg-red-50 flex items-center justify-center transition-colors"
                          aria-label="Remove line"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={addRow}
                  className="mt-4 inline-flex items-center gap-2 text-[#EA580C] hover:text-orange-600 font-semibold text-sm transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add Line Item
                </button>
              </div>

              <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm p-6">
                <h2 className="font-bold text-[#0F172A] mb-5">Tax & Totals</h2>
                <div className="grid grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">VAT %</span>
                    <input type="number" className={field} value={vatPct} onChange={(e) => setVatPct(e.target.value)} />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">Discount %</span>
                    <input type="number" className={field} value={discountPct} onChange={(e) => setDiscountPct(e.target.value)} />
                  </label>
                </div>
                <label className="block mt-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">Notes / Payment Terms</span>
                  <textarea
                    className={`${field} min-h-[70px]`}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </label>
              </div>

              <button
                onClick={() => window.print()}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#EA580C] text-white font-semibold px-6 py-3.5 rounded-md hover:bg-[#D4550A] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Print / Save as PDF
              </button>
            </div>

            {/* ---- Live preview ---- */}
            <div className="xl:col-span-3">
              <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm overflow-hidden" id="invoice-print">
                <div className="bg-[#0F172A] text-white px-8 py-6 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-2xl font-bold tracking-tight">NAJPEN</p>
                    <p className="text-xs text-[#94A3B8] mt-0.5">GLOBAL INTEGRATED LTD</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-2xl text-[#EA580C]">INVOICE</p>
                    <p className="text-xs text-[#94A3B8] mt-1">{invoiceNo}</p>
                  </div>
                </div>

                <div className="px-8 py-6">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">From</p>
                      <p className="font-semibold text-[#0F172A]">{company.name || '—'}</p>
                      <p className="text-sm text-[#64748B]">{company.address}</p>
                      <p className="text-sm text-[#64748B]">{company.email} · {company.phone}</p>
                      <p className="text-sm text-[#64748B]">RC: {company.rc}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">Bill To</p>
                      <p className="font-semibold text-[#0F172A]">{client.name || 'Client company'}</p>
                      <p className="text-sm text-[#64748B]">{client.person}</p>
                      <p className="text-sm text-[#64748B]">{client.address}</p>
                      <p className="text-sm text-[#64748B]">{client.email} · {client.phone}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-6 text-sm">
                    <div className="bg-[#F8FAFC] rounded-lg px-4 py-3">
                      <p className="text-xs text-[#64748B]">Issue Date</p>
                      <p className="font-semibold text-[#0F172A]">{issueDate}</p>
                    </div>
                    <div className="bg-[#F8FAFC] rounded-lg px-4 py-3">
                      <p className="text-xs text-[#64748B]">Due Date</p>
                      <p className="font-semibold text-[#0F172A]">{dueDate}</p>
                    </div>
                    <div className="bg-[#F8FAFC] rounded-lg px-4 py-3">
                      <p className="text-xs text-[#64748B]">Currency</p>
                      <p className="font-semibold text-[#0F172A]">₦ NGN</p>
                    </div>
                  </div>

                  <table className="w-full mt-8 text-sm">
                    <thead>
                      <tr className="border-b-2 border-[#0F172A]">
                        <th className="text-left py-2 font-semibold text-[#0F172A]">Description</th>
                        <th className="text-right py-2 font-semibold text-[#0F172A] w-16">Qty</th>
                        <th className="text-right py-2 font-semibold text-[#0F172A] w-28">Rate</th>
                        <th className="text-right py-2 font-semibold text-[#0F172A] w-28">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row) => (
                        <tr key={row.id} className="border-b border-[#E2E8F0]">
                          <td className="py-3 text-[#0F172A]">{row.description || '—'}</td>
                          <td className="py-3 text-right text-[#64748B]">{row.qty}</td>
                          <td className="py-3 text-right text-[#64748B]">{naira(parseFloat(row.rate) || 0)}</td>
                          <td className="py-3 text-right font-semibold text-[#0F172A]">
                            {naira((parseFloat(row.qty) || 0) * (parseFloat(row.rate) || 0))}
                          </td>
                        </tr>
                      ))}
                      {rows.length === 0 && (
                        <tr>
                          <td className="py-3 text-[#94A3B8]" colSpan={4}>No line items yet.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>

                  <div className="flex justify-end mt-6">
                    <div className="w-full max-w-xs space-y-2 text-sm">
                      <div className="flex justify-between text-[#64748B]">
                        <span>Subtotal</span>
                        <span className="font-semibold text-[#0F172A]">{naira(subtotal)}</span>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between text-[#64748B]">
                          <span>Discount ({discountPct}%)</span>
                          <span className="font-semibold text-[#0F172A]">-{naira(discount)}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-[#64748B]">
                        <span>VAT ({vatPct}%)</span>
                        <span className="font-semibold text-[#0F172A]">{naira(vat)}</span>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t-2 border-[#0F172A]">
                        <span className="font-bold text-[#0F172A]">Total Due</span>
                        <span className="font-bold text-[#EA580C] text-lg">{naira(total)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-[#E2E8F0] pt-4">
                    <p className="text-xs text-[#64748B]">Payment Terms & Notes</p>
                    <p className="text-sm text-[#0F172A] mt-1">{notes || '—'}</p>
                    <p className="text-xs text-[#94A3B8] mt-4">
                      Bank transfers accepted. For payment confirmation, email {company.email}.
                    </p>
                  </div>

                  <div className="mt-10 grid grid-cols-2 gap-8 text-xs text-[#94A3B8]">
                    <div>
                      <div className="border-t border-[#E2E8F0] pt-2">Authorised Signature</div>
                    </div>
                    <div className="text-right">
                      <div className="border-t border-[#E2E8F0] pt-2">Generated via najpenglobal.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}

export default InvoicePage