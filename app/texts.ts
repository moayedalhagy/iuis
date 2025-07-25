import { text } from "stream/consumers";

//  <br className="hidden md:block" />

export const IdentityIntroSection: string = `
نظراً لوجود حاجةٍ لنقل التعليم الشرعي الأكاديمي إلى مرحلةٍ متقدمة أكثرَ عُمقاً وتخصصا 
<br className="hidden md:block" />
 وتقديمِ قيمةٍ نوعيةٍ تحفظ مكانةَ الشامِ في محافل أكاديمية محليةٍ ودولية وفق تخصصات دقيقة.
`;

export const OneGoalsSection: string = `مؤسسةٌ أكاديميةٌ رائدةٌ في العلوم الإسلامية والبحث العلمي، تساهم في عملية النهضة.
`;

export const TwoGoalsSection: string = `إعدادُ خرّيجٍ عالٍ في الدراية، فاعلٍ في    مجتمعه، وِفقَ أحدث الأساليب والمحتوى العلمي المتقدم.`;

type GoalItemType = {
  text: string;
  icon_src: string;
};
const imageFolder = "/images/goals";
export const ListGoalsSection: Array<GoalItemType> = [
  {
    text: `إرســــاء تعلـــيــــم جامـــعــي
 متــــمــــيز ضمــن معايـــــير الجودة.`,
    icon_src: `${imageFolder}/1.svg`,
  },
  {
    text: `إعــــداد كفـــــــاءات علميـــة متخصصـــــــــــــة مواكبـــــة لاحتياجــــــات المجتمــــــــــع.`,
    icon_src: `${imageFolder}/2.svg`,
  },
  {
    text: `تهيئــــــة بيئـــــــة تعليمــــية جاذبة ومحفــــــزة للابتكــــار والريادة.`,
    icon_src: `${imageFolder}/3.svg`,
  },
  {
    text: `تعزيز الشخصيــــــة التربـــــوية الثقافية وتنميــة حـب العلم والبحث العلمــي والعــــــــمل الجماعــــــــــــي. `,
    icon_src: `${imageFolder}/4.svg`,
  },
  {
    text: `تقديــــــــــــــم الخدمـــــــــــــــــات التعليميــة والاستشــــــــــاريـة لمؤسســـــــــــات المجتمـــــــع
 العامة والخاصة.`,
    icon_src: `${imageFolder}/5.svg`,
  },
  {
    text: `تحقيــــق شـــــــــراكات مــع الجامعــــــــــات المحليــــــــة والدولية ذات الأهــــــــداف المماثلة .`,
    icon_src: `${imageFolder}/6.svg`,
  },
];
