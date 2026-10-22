/* ============================================================
   i18n.js — Arabic + English (natural, human tone)
   ============================================================ */
'use strict';

(function () {
  const STORAGE_KEY = 'lang';
  const DEFAULT_LANG = 'ar';

  const dict = {
    ar: {
      'lang.label': 'EN',
      'lang.switchTo': 'Switch to English',

      'brand.name': 'أريج عوكل',
      'brand.role': 'مطوّرة ومصمّمة مواقع',

      'nav.home': 'الرئيسية',
      'nav.about': 'نبذة عني',
      'nav.why': 'لماذا أنا',
      'nav.dev': 'البرمجة',
      'nav.design': 'التصميم',
      'nav.services': 'الخدمات',
      'nav.process': 'طريقة العمل',
      'nav.contact': 'تواصل',
      'nav.ariaMain': 'التنقل الرئيسي',
      'nav.burger': 'القائمة',

      'a11y.skip': 'انتقل إلى المحتوى',
      'newWindow': ' (يفتح في نافذة جديدة)',
      'toTop': 'العودة إلى الأعلى',
      'whatsapp': 'تواصل عبر واتساب (يفتح في نافذة جديدة)',

      'cta.freeQuote': 'اطلب عرضاً مجانياً',
      'cta.browseWork': 'تصفّح أعمالي',

      'theme.toggle': 'تفعيل الوضع الداكن',
      'theme.toggleTitle': 'تبديل الوضع',

      'hero.available': 'متاحة لاستقبال مشاريع جديدة',
      'hero.title': 'موقع يعبّر عن <em>قيمة عملك</em>',
      'hero.lead': 'أصمّم وأبني مواقع وتطبيقات ويب تجعل الزائر يفهم نشاطك من أول نظرة، فيثق بك ويتواصل معك. تصميم وتطوير ودعم في مكان واحد.',
      'hero.promise1': 'عرض سعر مجاني دون أي التزام',
      'hero.promise2': 'نموذج أولي تراجعه قبل دفع المبلغ كاملاً',
      'hero.promise3': 'ردّ شخصي خلال 24 ساعة',
      'hero.meta.hours': '24 ساعة',
      'hero.meta.hoursLabel': 'وقت الردّ',
      'hero.meta.free': 'مجاني',
      'hero.meta.freeLabel': 'عرض السعر',
      'hero.meta.remote': 'عن بُعد',
      'hero.meta.remoteLabel': 'مع عملاء حول العالم',
      'hero.portraitAlt': 'أريج عوكل — مطوّرة ومصمّمة مواقع',
      'hero.card.name': 'أريج عوكل',
      'hero.card.role': 'مطوّرة ومصمّمة مواقع',
      'hero.card.badge': 'متاحة الآن',
      'hero.edu.label': 'التعليم',
      'hero.edu.university': 'الجامعة الإسلامية بغزة',
      'hero.edu.major': 'تكنولوجيا المعلومات — الوسائط المتعددة وتطوير الويب',
      'hero.edu.gpaLabel': 'المعدل',

      'about.eyebrow': '01 — نبذة عني',
      'about.title': 'شغف يجمع بين <em>الفن والتقنية</em>',
      'about.lead': 'أنا أريج عوكل، مطوّرة <strong lang="en">Full-Stack</strong> وخريجة تخصص الوسائط المتعددة وتطوير الويب. يجذبني الجمع بين التصميم والبرمجة لبناء مواقع وتطبيقات تجمع بين المظهر الجميل وسهولة الاستخدام.',
      'about.p2': 'من خلال دراستي ومشاريعي، عملت على تطوير تطبيقات ويب باستخدام <span lang="en">Laravel</span> و<span lang="en">MySQL</span>، وبناء واجهات تفاعلية وربطها بالأنظمة الخلفية. أحرص على تطوير مهاراتي باستمرار، وأهتم بالتفاصيل التي تجعل المنتج الرقمي واضحاً وعملياً ويخدم احتياجات مستخدميه.',
      'about.h1.title': 'تصميم الواجهات',
      'about.h1.desc': 'تصميم واجهات واضحة ومتناسقة تراعي سهولة الاستخدام.',
      'about.h2.title': 'تطوير الويب',
      'about.h2.desc': 'بناء واجهات المواقع وتطوير الأنظمة الخلفية وقواعد البيانات.',
      'about.h3.title': 'حل المشكلات',
      'about.h3.desc': 'تحليل المتطلبات وتحويل الأفكار إلى حلول برمجية عملية.',
      'about.skills': 'التقنيات والأدوات',

      'why.eyebrow': '02 — لماذا أنا؟',
      'why.title': 'أربعة أسباب تمنحك <em>الاطمئنان قبل أن تبدأ</em>',
      'why.sub': 'مواقع كثيرة تعمل، لكن قليلاً منها يجلب عملاء. هذه الفروق ستلمسها من أول تواصل.',
      'why.c1.title': 'ترى العمل قبل دفع المبلغ كاملاً',
      'why.c1.desc': 'أعرض عليك نموذجاً أولياً للواجهة أو النظام. إن أعجبك أكملنا، وإن لم يناسبك فلا إلزام بالاستمرار. الجهد الأول عليّ لا عليك.',
      'why.c2.title': 'تتحدث إليّ مباشرة',
      'why.c2.desc': 'لا وسطاء ولا فريق مبيعات. أنا من يستمع إليك، وأنا من يبني، وأنا من يبقى معك بعد التسليم.',
      'why.c3.title': 'تصميم وتطوير ودعم من شخص واحد',
      'why.c3.desc': 'لن تحتاج إلى البحث عن مصمم ومبرمج ومن ينسّق بينهما. كل شيء في مكان واحد، ولكل مرحلة مسؤول واحد.',
      'why.c4.title': 'التركيز على النتيجة لا على الشكل فقط',
      'why.c4.desc': 'التصميم الجميل وحده لا يكفي. الهدف أن يتحول الزائر إلى عميل، وكل قرار تقني أو بصري يخدم هذا الهدف.',

      'dev.eyebrow': '03 — البرمجة',
      'dev.title': 'مشاريع <em>تطوير الويب</em>',
      'dev.sub': 'تطبيقات ومواقع حديثة بمعايير أداء وأمان عالية، من الواجهات التفاعلية إلى الأنظمة الخلفية وقواعد البيانات.',
      'dev.filterAria': 'فلترة مشاريع البرمجة',
      'dev.p1.badge': 'Full Stack',
      'dev.p1.cat': 'Full Stack',
      'dev.p1.title': 'متجر إلكتروني كامل',
      'dev.p1.desc': 'تجربة شراء كاملة: سلة ودفع ولوحة تحكم يدير منها صاحب المتجر المنتجات والطلبات بنفسه.',
      'dev.p2.badge': 'جديد',
      'dev.p2.cat': 'Frontend',
      'dev.p2.title': 'تطبيق إدارة مهام',
      'dev.p2.desc': 'تطبيق تفاعلي لإدارة المهام اليومية بواجهة بسيطة وحفظ محلي، يعمل حتى بدون إنترنت.',
      'dev.p3.badge': 'API',
      'dev.p3.cat': 'Backend',
      'dev.p3.title': 'منصة REST API',
      'dev.p3.desc': 'واجهة خلفية كاملة مع مصادقة وصلاحيات وجلسات آمنة، جاهزة للربط مع أي واجهة أمامية.',
      'dev.p4.cat': 'Full Stack',
      'dev.p4.title': 'منصة مدونة',
      'dev.p4.desc': 'نظام نشر كامل مع لوحة تحكم وتصنيفات وبحث، يتيح لصاحب المدونة النشر بنفسه دون كتابة كود.',
      'dev.p5.cat': 'Frontend',
      'dev.p5.title': 'تطبيق طقس',
      'dev.p5.desc': 'يعرض حالة الطقس لحظياً عبر واجهة API خارجية، بتصميم متجاوب على جميع الأجهزة.',
      'dev.p6.badge': 'Landing',
      'dev.p6.cat': 'Landing Page',
      'dev.p6.title': 'موقع شركة خدمات',
      'dev.p6.desc': 'موقع يعرض خدمات الشركة بوضوح، ويسهّل على الزائر التواصل معها من أي صفحة.',
      'dev.cta.text': 'أعجبك ما رأيت؟ لنبنِ لك مشروعاً مماثلاً.',
      'dev.loqma.badge': 'مباشر',
      "dev.loqma.cat": "Frontend",
      'dev.loqma.title': 'لُقمة — مطعم عربي معاصر',
      "dev.loqma.desc": "تجربة طعام رقمية متكاملة: قائمة تفاعلية، بحث فوري، سلة تسوق ذكية، ومفضلة — بواجهة عربية وإنجليزية، وضع فاتح وداكن، وأنيميشن احترافي.",
      'dev.next.badge': 'مباشر',
      'dev.next.cat': ' Frontend + PWA',
      'dev.next.title': 'NEXT — منصة تقييم تكيفي',
      'dev.next.desc': 'منصة عربية بتقييم تكيفي تساعد المستخدم على فهم وضعه الحقيقي وتحديد خطوته التالية. متاحة كتطبيق ويب تقدمي (PWA) يعمل دون اتصال، بواجهات عربية كاملة (RTL)، وتدفّق مستخدم متكامل من التسجيل حتى لوحة التحكم.',

      'design.eyebrow': '04 — التصميم',
      'design.title': 'مشاريع <em>الوسائط المتعددة</em>',
      'design.sub': 'هويات بصرية وواجهات وموشن جرافيك. لكل مشروع غرض واضح، لا مجرد شكل جميل.',
      'design.filterAria': 'فلترة أعمال التصميم',
      'design.p1.cat': 'هوية بصرية',
      'design.p1.title': 'هوية شركة تقنية',
      'design.p1.desc': 'نظام بصري متكامل: شعار وألوان وخطوط وتطبيقات على المنصات الرقمية والمطبوعة.',
      'design.p2.badge': 'جديد',
      'design.p2.title': 'تطبيق توصيل طعام',
      'design.p2.desc': 'تصميم واجهات يقلّل عدد النقرات في كل خطوة، من اختيار الطبق حتى تأكيد التوصيل.',
      'design.p3.badge': 'سلسلة',
      'design.p3.cat': 'سوشيال ميديا',
      'design.p3.title': 'تصاميم سلسلة محتوى',
      'design.p3.desc': 'مجموعة منشورات بهوية بصرية متسقة، جاهزة للاستخدام عبر منصات متعددة.',
      'design.p4.cat': 'هوية بصرية',
      'design.p4.title': 'علامة مقهى مختص',
      'design.p4.desc': 'هوية بصرية شاملة: تغليف وأكواب وقائمة أسعار بلغة بصرية واحدة.',
      'design.p5.badge': 'فيديو',
      'design.p5.cat': 'موشن جرافيك',
      'design.p5.title': 'فيديو موشن جرافيك',
      'design.p5.desc': 'مقطع قصير يشرح خدمة رقمية بأسلوب بصري مبسّط، مناسب للعروض التقديمية والسوشيال ميديا.',
      'design.p6.cat': '3D / Blender',
      'design.p6.title': 'تصميم 3D',
      'design.p6.desc': 'نماذج ثلاثية الأبعاد بمعالجة دقيقة للخامات والإضاءة، جاهزة للاستخدام التسويقي.',
      'design.cta.text': 'هل أعجبتك الأعمال؟ يسعدني تنفيذ مشروعك التالي.',
      'design.cta.btn': 'اطلب مشروعك الخاص',

      'services.eyebrow': '05 — الخدمات',
      'services.title': 'أيٌّ من هذه <em>يحتاجه مشروعك؟</em>',
      'services.sub': 'اختر الحالة الأقرب إلى وضعك، وستجد تحت كل خدمة ما ستحصل عليه بالتفصيل.',
      'services.s1.title': 'تصميم واجهات المستخدم',
      'services.s1.pain': 'لديك فكرة تطبيق أو موقع، وتحتاج إلى واجهة يفهمها العميل من أول نظرة؟',
      'services.s1.desc': 'أصمّم واجهات عصرية وواضحة توازن بين الجمال وسهولة الاستخدام، وتمنح الزوار تجربة سلسة على مختلف الأجهزة والشاشات.',
      'services.s1.cta': 'اطلب عرضاً لهذه الخدمة',
      'services.s2.title': 'تصميم الهوية البصرية',
      'services.s2.pain': 'علامتك التجارية تفتقر إلى طابع مميز، ولا يتذكرها العملاء؟',
      'services.s2.desc': 'أبني هوية بصرية متناسقة تعبّر عن شخصية مشروعك، وتساعده على تكوين حضور مميز ومتسق عبر المنصات الرقمية والمطبوعات.',
      'services.s2.cta': 'اطلب عرضاً للهوية',
      'services.s3.title': 'تطوير مواقع الويب',
      'services.s3.pain': 'موقعك بطيء، أو لا يجلب عملاء، أو تحتاج إلى موقع جديد من الصفر؟',
      'services.s3.desc': 'أطوّر مواقع ويب تفاعلية تجمع بين التصميم الجيد والوظائف العملية، مع العناية بجودة الكود وتنظيم البيانات والتوافق مع مختلف الأجهزة.',
      'services.s3.cta': 'اطلب عرضاً للموقع',
      'services.s4.title': 'الموشن جرافيك والمحتوى المرئي',
      'services.s4.pain': 'تريد شرح فكرة معقدة، أو تقديم منتج، أو جذب الانتباه بمحتوى بصري؟',
      'services.s4.desc': 'أحوّل الأفكار والرسائل إلى محتوى بصري متحرك يجذب الانتباه ويبسّط المعلومات ويعزز حضور العلامات التجارية على المنصات الرقمية.',
      'services.s4.cta': 'اطلب عرضاً للموشن',

      'process.eyebrow': '06 — ماذا بعد؟',
      'process.title': 'إن راسلتني، <em>فهذا ما سيحدث</em>',
      'process.sub': 'خطوات واضحة من أول رسالة حتى نهاية المشروع، دون غموض أو انتظار طويل.',
      'process.s1.title': 'ترسل رسالة',
      'process.s1.desc': 'فكرة المشروع والجمهور المستهدف والميزانية التقريبية إن أمكن، في بضعة أسطر.',
      'process.s2.title': 'أردّ خلال 24 ساعة',
      'process.s2.desc': 'بسؤال توضيحي أو بموعد لجلسة قصيرة، بحسب حاجة المشروع.',
      'process.s3.title': 'تستلم عرضاً مكتوباً',
      'process.s3.desc': 'السعر والمدة والمخرجات، دون أي التزام منك.',
      'process.s4.title': 'نبني معاً',
      'process.s4.desc': 'نموذج أولي أولاً، ثم بناء تدريجي مع مراجعات منتظمة.',

      'faq.eyebrow': '07 — أسئلة شائعة',
      'faq.title': 'هل لديك سؤال <em>قبل أن تبدأ؟</em>',
      'faq.sub': 'هذه أكثر الأسئلة التي تصلني. وإن لم تجد جوابك، فاسألني مباشرة.',
      'faq.q1': 'كم تبلغ تكلفة المشروع؟',
      'faq.a1': 'تعتمد على حجمه وعدد صفحاته وميزاته. بعد أن أستمع إلى فكرتك أرسل لك عرضاً واضحاً دون التزام. وإن لم يناسبك السعر، تبقى الخطة بين يديك لتبدأ بها مع من تشاء.',
      'faq.q2': 'كم تستغرق مدة التسليم؟',
      'faq.a2': 'تعتمد على حجم المشروع؛ فالصفحات البسيطة أسرع، والمشاريع المتكاملة تحتاج وقتاً أطول. بعد جلسة الفهم أعطيك جدولاً زمنياً واقعياً، دون وعود لا أستطيع الوفاء بها.',
      'faq.q3': 'ليست لدي فكرة واضحة، فمن أين أبدأ؟',
      'faq.a3': 'هذا طبيعي. كثير من العملاء يبدؤون بجملة واحدة عن نشاطهم. نجلس معاً، وأطرح الأسئلة، ونحدد الاتجاه الصحيح، حتى لو لم نعمل معاً بعد ذلك.',
      'faq.q4': 'ماذا بعد التسليم؟ ومن يصلح الأعطال؟',
      'faq.a4': 'خلال الفترة الأولى بعد التسليم أتولى التعديلات الصغيرة بنفسي. بعد ذلك نتفق على ترتيب واضح للدعم المستمر، شهرياً أو عند الحاجة.',
      'faq.q5': 'هل تعملين مع عملاء خارج فلسطين؟',
      'faq.a5': 'نعم، أعمل عن بُعد مع عملاء من مختلف البلدان، ويتم التواصل عبر البريد الإلكتروني أو Zoom بحسب ما يناسبك.',
      'faq.q6': 'كيف تتم عملية الدفع؟',
      'faq.a6': 'تُدفع دفعة أولى (30%) للبدء، ويُسدَّد الباقي بعد مراجعة النتيجة والموافقة عليها. وتُحدَّد طريقة الدفع بما يناسبك.',

      'contact.eyebrow': '08 — تواصل',
      'contact.title': 'هل أنت مستعد للبدء؟ <em>لنتحدث.</em>',
      'contact.sub': 'أرسل فكرة مشروعك ولو في جملتين، وستصلك خطة أولية وسعر مبدئي دون التزام.',
      'contact.available': 'متاحة لاستقبال مشاريع جديدة',
      'contact.email': 'البريد الإلكتروني',
      'contact.phone': 'الهاتف',
      'contact.location': 'الموقع',
      'contact.locationValue': 'فلسطين — متاحة عن بُعد',
      'contact.promise': 'ردّ شخصي — <strong>خلال 24 ساعة</strong>',

      'form.name': 'الاسم',
      'form.namePlaceholder': 'اسمك الكامل',
      'form.email': 'البريد الإلكتروني',
      'form.subject': 'نوع المشروع',
      'form.subjectPlaceholder': 'موقع، متجر، تطبيق، هوية بصرية...',
      'form.message': 'تفاصيل المشروع',
      'form.messagePlaceholder': 'الفكرة، والجمهور المستهدف، والوقت المتوقع، وأي تفاصيل تساعدني على الفهم أكثر...',
      'form.submit': 'أرسل الرسالة',
      'form.sending': 'جارٍ الإرسال...',
      'form.success': 'شكراً {name} — وصلتني رسالتك وسأرد عليك شخصياً خلال 24 ساعة.',
      'form.rateLimit': 'انتظر دقيقة قبل إرسال رسالة أخرى.',
      'form.validation': 'يرجى تصحيح الحقول المُعلَّمة.',
      'form.error': 'تعذّر إرسال الرسالة. حاول مجدداً أو راسلني على areejoukal@gmail.com.',
      'form.notConfigured': 'النموذج غير مفعّل بعد. يمكنك مراسلتي على areejoukal@gmail.com.',
      'form.err.name': 'أدخل اسمك من فضلك',
      'form.err.email': 'تأكد من صيغة البريد الإلكتروني',
      'form.err.subject': 'أخبرني بنوع المشروع',
      'form.err.message': 'أضف تفاصيل أكثر (10 أحرف على الأقل)',

      'footer.readyTitle': 'هل أنت مستعد للبدء؟ <em>لنتحدث</em>',
      'footer.readyText': 'أرسل فكرة مشروعك ولو في جملتين، وستصلك خطة أولية دون التزام.',
      'footer.about': 'أبني مواقع وتطبيقات ويب تُبرز قيمة عملك وتجلب لك عملاء: تصميم وتطوير ودعم في مكان واحد.',
      'footer.trust1': '✓ عرض سعر مجاني',
      'footer.trust2': '✓ نموذج أولي قبل الدفع الكامل',
      'footer.trust3': '✓ دعم بعد التسليم',
      'footer.navTitle': 'التنقّل',
      'footer.servicesTitle': 'الخدمات',
      'footer.contactTitle': 'تواصل',
      'footer.copyright': '© {year} أريج عوكل — جميع الحقوق محفوظة.',
      'footer.faqLink': 'الأسئلة الشائعة',

      'filters.all': 'الكل',
      'filters.branding': 'هوية',
      'filters.social': 'سوشيال',
      'filters.motion': 'موشن',

      
      'meta.title': 'أريج عوكل — مطوّرة ومصمّمة مواقع | اطلب عرضاً مجانياً',
      'meta.description': 'أريج عوكل — مطوّرة ومصمّمة مواقع. أبني مواقع وتطبيقات ويب تجعل الزائر يفهم نشاطك من أول نظرة.'
      
    },

    /* ============================================================
       English — natural, friendly, human tone
       ============================================================ */
    en: {
      'lang.label': 'AR',
      'lang.switchTo': 'Switch to Arabic',

      'brand.name': 'Areej Oukal',
      'brand.role': 'Web Developer & Designer',

      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.why': 'Why Me',
      'nav.dev': 'Dev',
      'nav.design': 'Design',
      'nav.services': 'Services',
      'nav.process': 'Process',
      'nav.contact': 'Contact',
      'nav.ariaMain': 'Main navigation',
      'nav.burger': 'Menu',

      'a11y.skip': 'Skip to content',
      'newWindow': ' (opens in a new tab)',
      'toTop': 'Back to top',
      'whatsapp': 'Chat on WhatsApp (opens in a new tab)',

      'cta.freeQuote': 'Get a free quote',
      'cta.browseWork': 'See my work',

      'theme.toggle': 'Switch to dark mode',
      'theme.toggleTitle': 'Toggle theme',

      'hero.available': 'Open for new projects',
      'hero.title': 'A website that shows <em>what your work is worth</em>',
      'hero.lead': 'I design and build websites and web apps that make people get what you do the moment they land on your page — so they trust you and reach out. Design, code, and support, all from one person.',
      'hero.promise1': 'A free quote, no strings attached',
      'hero.promise2': 'A first draft you review before paying in full',
      'hero.promise3': 'A real reply from me within 24 hours',
      'hero.meta.hours': '24 hrs',
      'hero.meta.hoursLabel': 'Reply time',
      'hero.meta.free': 'Free',
      'hero.meta.freeLabel': 'Quote',
      'hero.meta.remote': 'Remote',
      'hero.meta.remoteLabel': 'Working with clients worldwide',
      'hero.portraitAlt': 'Areej Oukal — Web Developer & Designer',
      'hero.card.name': 'Areej Oukal',
      'hero.card.role': 'Web Developer & Designer',
      'hero.card.badge': 'Available now',
      'hero.edu.label': 'Education',
      'hero.edu.university': 'Islamic University of Gaza',
      'hero.edu.major': 'IT — Multimedia & Web Development',
      'hero.edu.gpaLabel': 'GPA',

      'about.eyebrow': '01 — About Me',
      'about.title': 'Where <em>art meets code</em>',
      'about.lead': 'Hi, I\'m Areej — a <strong>full-stack developer</strong> with a background in multimedia and web development. What I love most is mixing design and code to build sites and apps that look great and feel easy to use.',
      'about.p2': 'Through my studies and personal projects, I\'ve built web apps with <span>Laravel</span> and <span>MySQL</span>, and created interactive interfaces that talk to back-end systems. I\'m always learning, and I care about the small details that make a product feel clear and actually useful.',
      'about.h1.title': 'Interface design',
      'about.h1.desc': 'Clean, consistent screens that are easy to use.',
      'about.h2.title': 'Web development',
      'about.h2.desc': 'Front-ends, back-ends, and databases — built to work together.',
      'about.h3.title': 'Problem solving',
      'about.h3.desc': 'Turning fuzzy ideas into software that actually works.',
      'about.skills': 'Tech & tools',

      'why.eyebrow': '02 — Why Me?',
      'why.title': 'Four reasons you can <em>relax before we start</em>',
      'why.sub': 'Plenty of websites work. Very few bring in clients. You\'ll notice the difference from our very first chat.',
      'why.c1.title': 'You see the work before you pay in full',
      'why.c1.desc': 'I show you a first draft of the design or app. If you like it, we keep going. If not, no hard feelings — you don\'t owe me anything. That first round of work is on me.',
      'why.c2.title': 'You talk to me, not a sales team',
      'why.c2.desc': 'No middlemen. I\'m the one who listens to you, the one who builds it, and the one still around after launch.',
      'why.c3.title': 'One person for design, build, and support',
      'why.c3.desc': 'You won\'t need to hunt down a designer, a developer, and someone to keep them in sync. It\'s all in one place, with one person in charge at every step.',
      'why.c4.title': 'I care about results, not just looks',
      'why.c4.desc': 'A pretty site alone won\'t cut it. The goal is turning visitors into customers — and every design and code decision is made with that in mind.',

      'dev.eyebrow': '03 — Development',
      'dev.title': 'Web <em>development work</em>',
      'dev.sub': 'Modern apps and websites built to be fast and safe — from interactive front-ends all the way down to the database.',
      'dev.filterAria': 'Filter development projects',
      'dev.p1.badge': 'Full Stack',
      'dev.p1.cat': 'Full Stack',
      'dev.p1.title': 'Full online store',
      'dev.p1.desc': 'A complete shopping experience — cart, checkout, and a dashboard the owner uses to manage products and orders on their own.',
      'dev.p2.badge': 'New',
      'dev.p2.cat': 'Frontend',
      'dev.p2.title': 'Task manager app',
      'dev.p2.desc': 'A simple, snappy app for keeping track of daily tasks — saves everything locally, so it works even offline.',
      'dev.p3.badge': 'API',
      'dev.p3.cat': 'Backend',
      'dev.p3.title': 'REST API platform',
      'dev.p3.desc': 'A complete back-end with login, permissions, and secure sessions — ready to plug into any front-end.',
      'dev.p4.cat': 'Full Stack',
      'dev.p4.title': 'Blog platform',
      'dev.p4.desc': 'A full publishing system with a dashboard, categories, and search — so the owner can post without touching any code.',
      'dev.p5.cat': 'Frontend',
      'dev.p5.title': 'Weather app',
      'dev.p5.desc': 'Pulls live weather from an outside API, with a layout that looks right on any screen.',
      'dev.p6.badge': 'Landing',
      'dev.p6.cat': 'Landing Page',
      'dev.p6.title': 'Services company site',
      'dev.p6.desc': 'Puts the company\'s services front and center and makes it easy to get in touch from any page.',
      'dev.cta.text': 'Like what you see? Let\'s build something like it for you.',
    
      'dev.loqma.badge': 'Live',
      "dev.loqma.cat": "Frontend",
      'dev.loqma.title': 'LOQMA — Modern Arabic Restaurant',
      "dev.loqma.desc": "A complete digital dining experience: interactive menu, instant search, smart cart, and wishlist — in Arabic & English, light & dark modes, with professional animations.",
      'dev.next.badge': 'Live',
      'dev.next.cat': 'Frontend + PWA',
      'dev.next.title': 'NEXT — Adaptive Assessment Platform',
      'dev.next.desc': 'An Arabic adaptive assessment platform that helps users understand their real situation and define their next step. Available as an offline-capable PWA with full RTL Arabic interfaces and a complete user flow from signup to dashboard.',
          
      'design.eyebrow': '04 — Design',
      'design.title': 'Multimedia <em>projects</em>',
      'design.sub': 'Brand identities, interfaces, and motion pieces. Every project has a real purpose behind it — not just a pretty look.',
      'design.filterAria': 'Filter design projects',
      'design.p1.cat': 'Brand identity',
      'design.p1.title': 'Tech company brand',
      'design.p1.desc': 'A full visual system — logo, colors, type, and applications across screen and print.',
      'design.p2.badge': 'New',
      'design.p2.title': 'Food delivery app',
      'design.p2.desc': 'An interface that cuts clicks at every step — from picking a dish to confirming the order.',
      'design.p3.badge': 'Series',
      'design.p3.cat': 'Social media',
      'design.p3.title': 'Content series designs',
      'design.p3.desc': 'A set of posts with one consistent look, ready to post on any platform.',
      'design.p4.cat': 'Brand identity',
      'design.p4.title': 'Specialty café brand',
      'design.p4.desc': 'A complete brand package — packaging, cups, and menu, all speaking the same visual language.',
      'design.p5.badge': 'Video',
      'design.p5.cat': 'Motion graphics',
      'design.p5.title': 'Motion graphics video',
      'design.p5.desc': 'A short video that explains a digital service in a simple, visual way — great for pitches and social media.',
      'design.p6.cat': '3D / Blender',
      'design.p6.title': '3D design',
      'design.p6.desc': '3D models with careful work on materials and lighting, ready for marketing use.',
      'design.cta.text': 'Like these? I\'d love to work on your next project.',
      'design.cta.btn': 'Start your own project',

      'services.eyebrow': '05 — Services',
      'services.title': 'Which of these <em>does your project need?</em>',
      'services.sub': 'Pick the one closest to your situation — under each, you\'ll find exactly what you get.',
      'services.s1.title': 'UI design',
      'services.s1.pain': 'You\'ve got an app or site idea and need an interface people "get" the second they see it?',
      'services.s1.desc': 'I design modern, clear screens that balance beauty and ease of use, giving visitors a smooth ride on any device.',
      'services.s1.cta': 'Get a quote for this',
      'services.s2.title': 'Brand identity design',
      'services.s2.pain': 'Your brand doesn\'t feel distinct, and clients keep forgetting it?',
      'services.s2.desc': 'I build a consistent visual identity that captures what your project is about and helps it stand out everywhere — online and in print.',
      'services.s2.cta': 'Get a brand quote',
      'services.s3.title': 'Web development',
      'services.s3.pain': 'Your site is slow, isn\'t bringing in clients, or you need a brand-new one from scratch?',
      'services.s3.desc': 'I build interactive sites that combine good design with features that work — with clean code, organized data, and layouts that hold up on any screen.',
      'services.s3.cta': 'Get a website quote',
      'services.s4.title': 'Motion graphics & visual content',
      'services.s4.pain': 'Need to explain a tricky idea, show off a product, or grab attention with something visual?',
      'services.s4.desc': 'I turn ideas and messages into motion content that grabs attention, simplifies the message, and gives brands a stronger presence online.',
      'services.s4.cta': 'Get a motion quote',

      'process.eyebrow': '06 — What\'s next?',
      'process.title': 'Message me, and <em>here\'s what happens</em>',
      'process.sub': 'Clear steps from your first message to launch day — no mystery, no long waits.',
      'process.s1.title': 'You send a message',
      'process.s1.desc': 'A few lines about your idea, who it\'s for, and roughly what your budget looks like.',
      'process.s2.title': 'I reply within 24 hours',
      'process.s2.desc': 'With a quick question, or a short call if the project needs one.',
      'process.s3.title': 'You get a written quote',
      'process.s3.desc': 'Price, timeline, and what you\'ll get — with zero obligation.',
      'process.s4.title': 'We build it together',
      'process.s4.desc': 'A first draft, then steady progress with regular check-ins.',

      'faq.eyebrow': '07 — FAQ',
      'faq.title': 'Any questions <em>before we start?</em>',
      'faq.sub': 'These are the ones I hear most. If yours isn\'t here, just ask.',
      'faq.q1': 'How much does a project cost?',
      'faq.a1': 'It depends on the size, how many pages, and what features you need. After I hear your idea, I\'ll send you a clear quote with no obligation. And if the price isn\'t right for you, the plan is still yours — take it and run with it wherever you like.',
      'faq.q2': 'How long does it take?',
      'faq.a2': 'Depends on the project. Simple pages are quick; fuller apps take longer. After we chat, I\'ll give you a realistic timeline — no promises I can\'t keep.',
      'faq.q3': 'I don\'t really have a clear idea yet. Where do I start?',
      'faq.a3': 'Totally normal. A lot of clients start with just one sentence about their business. We talk it through, I ask questions, and we figure out the right direction — even if we end up not working together.',
      'faq.q4': 'What happens after launch? Who fixes things if something breaks?',
      'faq.a4': 'For the first stretch after launch, I handle small fixes myself. After that, we agree on a clear arrangement for ongoing support — monthly, or just when you need it.',
      'faq.q5': 'Do you work with clients outside Palestine?',
      'faq.a5': 'Yes — I work remotely with clients in lots of different countries, and we chat by email or Zoom, whatever works best for you.',
      'faq.q6': 'How does payment work?',
      'faq.a6': 'A 30% deposit gets things started, and the rest is paid once you\'ve reviewed the result and you\'re happy with it. We can set up the payment method in whatever way works for you.',

      'contact.eyebrow': '08 — Contact',
      'contact.title': 'Ready to start? <em>Let\'s talk.</em>',
      'contact.sub': 'Send me your idea — even just two sentences — and you\'ll get a first plan and a rough price, with no obligation.',
      'contact.available': 'Open for new projects',
      'contact.email': 'Email',
      'contact.phone': 'Phone',
      'contact.location': 'Location',
      'contact.locationValue': 'Palestine — working remotely',
      'contact.promise': 'A real reply from me — <strong>within 24 hours</strong>',

      'form.name': 'Name',
      'form.namePlaceholder': 'Your full name',
      'form.email': 'Email',
      'form.subject': 'Project type',
      'form.subjectPlaceholder': 'Website, store, app, brand identity...',
      'form.message': 'Project details',
      'form.messagePlaceholder': 'Your idea, who it\'s for, when you\'d like it done, and anything else that helps me understand...',
      'form.submit': 'Send message',
      'form.sending': 'Sending...',
      'form.success': 'Thanks {name} — got your message. I\'ll reply within 24 hours.',
      'form.rateLimit': 'Hang on a minute before sending another message.',
      'form.validation': 'Please fix the highlighted fields.',
      'form.error': 'Something went wrong sending your message. Try again, or email me at areejoukal@gmail.com.',
      'form.notConfigured': 'The form isn\'t set up yet. You can email me at areejoukal@gmail.com.',
      'form.err.name': 'Please enter your name',
      'form.err.email': 'Please check your email address',
      'form.err.subject': 'Let me know what kind of project this is',
      'form.err.message': 'Add a bit more detail (at least 10 characters)',

      'footer.readyTitle': 'Ready to start? <em>Let\'s talk</em>',
      'footer.readyText': 'Send me your idea — even just two sentences — and you\'ll get a first plan, with no obligation.',
      'footer.about': 'I build websites and web apps that show off what your business does — and bring you clients. Design, code, and support, all in one place.',
      'footer.trust1': '✓ Free quote',
      'footer.trust2': '✓ First draft before full payment',
      'footer.trust3': '✓ Support after launch',
      'footer.navTitle': 'Site',
      'footer.servicesTitle': 'Services',
      'footer.contactTitle': 'Contact',
      'footer.copyright': '© {year} Areej Oukal — All rights reserved.',
      'footer.faqLink': 'FAQ',

      'filters.all': 'All',
      'filters.branding': 'Branding',
      'filters.social': 'Social',
      'filters.motion': 'Motion',

      'meta.title': 'Areej Oukal — Web Developer & Designer | Get a free quote',
      'meta.description': 'Areej Oukal — Web Developer & Designer. I build websites and web apps that make people get what you do the moment they land on your page.'
    }
  };

  const get = (lang, key) => (dict[lang] && dict[lang][key]) || (dict[DEFAULT_LANG] && dict[DEFAULT_LANG][key]) || key;
  const interpolate = (str, vars) =>
    String(str).replace(/\{(\w+)\}/g, (m, k) => (vars && vars[k] != null ? vars[k] : m));

  let currentLang = DEFAULT_LANG;

  function applyLang(lang) {
    currentLang = lang;
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      el.textContent = get(lang, key);
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      el.innerHTML = get(lang, key);
    });

    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      el.getAttribute('data-i18n-attr').split(',').forEach((pair) => {
        const [attr, key] = pair.split(':').map((s) => s.trim());
        if (attr && key) el.setAttribute(attr, get(lang, key));
      });
    });

    const year = new Date().getFullYear();
    const copyEl = document.querySelector('.footer__copy');
    if (copyEl) copyEl.innerHTML = interpolate(get(lang, 'footer.copyright'), { year });

    const btn = document.getElementById('lang-toggle');
    if (btn) {
      const label = btn.querySelector('.lang-toggle__label');
      if (label) label.textContent = get(lang, 'lang.label');
      btn.setAttribute('aria-label', get(lang, 'lang.switchTo'));
    }

    document.title = get(lang, 'meta.title');
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', get(lang, 'meta.description'));
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', lang === 'ar' ? 'ar_AR' : 'en_US');

    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  function setLang(lang, animate) {
    if (lang !== 'ar' && lang !== 'en') lang = DEFAULT_LANG;
    if (animate) {
      document.documentElement.classList.add('theme-transition');
      setTimeout(() => document.documentElement.classList.remove('theme-transition'), 400);
    }
    applyLang(lang);
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function init() {
    let lang = DEFAULT_LANG;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'ar' || stored === 'en') lang = stored;
      else {
        const nav = navigator.language || 'ar';
        lang = /^en/i.test(nav) ? 'en' : 'ar';
      }
    } catch (e) {}

    setLang(lang, false);

    const btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.addEventListener('click', () => {
        setLang(currentLang === 'ar' ? 'en' : 'ar', true);
      });
    }
  }

  window.i18n = {
    t: (key, vars) => interpolate(get(currentLang, key), vars),
    getLang: () => currentLang,
    setLang
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();