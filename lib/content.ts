import {
  Home,
  Scale,
  Fingerprint,
  Briefcase,
  GraduationCap,
  MessageSquare,
  IdCard,
  Truck,
  Store,
  Users,
  DoorOpen,
  Building2,
  FileText,
  MapPinned,
  Search,
  Stethoscope,
  Factory,
  Laptop,
  ShoppingBag,
  Landmark,
  ShieldCheck,
  ShoppingCart,
  Building,
  Clock,
  Headphones,
  FileCheck2,
  Share2,
  Zap,
  Lock,
  type LucideIcon,
} from "lucide-react";

export interface IconItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: IconItem[] = [
  { title: "Address verification", description: "Physical verification of residential addresses through field visits.", icon: Home },
  { title: "Court record checks", description: "Verification of available court records to identify legal proceedings.", icon: Scale },
  { title: "Criminal record checks", description: "Criminal background screening through authorized verification processes.", icon: Fingerprint },
  { title: "Employment verification", description: "Verification of employment history, designation, tenure and reporting details.", icon: Briefcase },
  { title: "Education verification", description: "Validation of qualifications, institutions attended and certifications.", icon: GraduationCap },
  { title: "Reference verification", description: "Professional reference verification from previous employers and supervisors.", icon: MessageSquare },
  { title: "Identity verification", description: "Verification of identity documents and associated details.", icon: IdCard },
  { title: "Vendor verification", description: "Verification checks for vendor onboarding and due diligence.", icon: Truck },
  { title: "Merchant verification", description: "Verification of merchant details prior to onboarding or partnership.", icon: Store },
  { title: "Dealer verification", description: "Verification checks for dealer and distributor relationships.", icon: Users },
  { title: "Residence verification", description: "On-ground confirmation of residential details.", icon: DoorOpen },
  { title: "Office verification", description: "On-ground confirmation of office and business premises.", icon: Building2 },
  { title: "Document collection", description: "Secure collection of documents as part of the verification process.", icon: FileText },
  { title: "Site inspection", description: "On-site inspection services for location and premises checks.", icon: MapPinned },
  { title: "Customized field investigation", description: "Tailored field investigations designed around your specific requirement.", icon: Search },
];

export const industries: { name: string; icon: LucideIcon }[] = [
  { name: "Hospitals & Healthcare", icon: Stethoscope },
  { name: "Staffing & Recruitment", icon: Users },
  { name: "Manufacturing", icon: Factory },
  { name: "Information Technology", icon: Laptop },
  { name: "Logistics & Warehousing", icon: Truck },
  { name: "Retail", icon: ShoppingBag },
  { name: "Education", icon: GraduationCap },
  { name: "Banking & Financial Services", icon: Landmark },
  { name: "Security & Facility Management", icon: ShieldCheck },
  { name: "E-Commerce", icon: ShoppingCart },
  { name: "Corporate Enterprises", icon: Building },
];

export const whyChooseUs: IconItem[] = [
  { title: "Years of industry experience", description: "Operating since 2012, with deep familiarity across verification types and regions.", icon: Clock },
  { title: "Dedicated customer support", description: "Timely updates and personalized support from enquiry through to report delivery.", icon: Headphones },
  { title: "Professional reporting", description: "Detailed, easy-to-understand reports built on verified findings.", icon: FileCheck2 },
  { title: "Reliable field network", description: "An extensive on-ground verification network across every region we serve.", icon: Share2 },
  { title: "Fast turnaround time", description: "Structured, quality-controlled workflows built for speed without cutting corners.", icon: Zap },
  { title: "Confidential data handling", description: "Sensitive information is handled under strict confidentiality protocols throughout.", icon: Lock },
];

export const processSteps = [
  { title: "Client requirement received", description: "Your verification request is logged and reviewed by our team." },
  { title: "Case allocation", description: "The case is assigned to the appropriate verification team." },
  { title: "Verification planning", description: "Requirements are analyzed and the verification process is initiated." },
  { title: "Field verification", description: "Physical visits, record checks and verification activities are carried out." },
  { title: "Quality review", description: "Collected information undergoes internal quality review and validation." },
  { title: "Report preparation", description: "A detailed report is prepared based on verified findings." },
  { title: "Final report submission", description: "The completed report is delivered within the agreed turnaround time." },
];

export const bgvPoints = [
  "Helps reduce hiring risks",
  "Confirms candidate identity and information",
  "Supports workplace safety",
  "Verifies employment history",
  "Verifies educational qualifications",
  "Helps identify criminal or court-related concerns where applicable",
  "Improves hiring confidence",
  "Supports organizational compliance",
  "Protects business reputation",
];

export const faqs = [
  {
    question: "How long does a verification check take?",
    answer:
      "Turnaround depends on the type of verification and location, but our structured, quality-controlled workflow is built to deliver most standard checks within a few business days. We'll confirm an exact timeline once we understand your requirement.",
  },
  {
    question: "Is my information kept confidential?",
    answer:
      "Yes. Confidentiality is one of our core values — all information collected during a verification assignment is handled securely and used only for the purpose of that assignment.",
  },
  {
    question: "Which areas do you currently cover?",
    answer:
      "We currently serve Uttar Pradesh, Delhi NCR, Rajasthan, Punjab and Uttarakhand, and we're continuously expanding our field network across India.",
  },
  {
    question: "What types of checks do you offer?",
    answer:
      "We offer address, employment, education, identity, reference, criminal, and court record checks, along with vendor, merchant and dealer verification, site inspections and customized field investigations.",
  },
  {
    question: "How do I get started?",
    answer:
      "Send us your requirement through the enquiry form or call/WhatsApp us directly. Our team will get back to you promptly to understand your needs and outline next steps.",
  },
];
