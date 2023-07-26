import KartisLakohSapak from '../../../modals/kartasot/kartis-lakoh-sapak/kartis-lakoh-sapak';

export const componentMapping = {
  KartisLakohSapak,
  // ... Add more components to the mapping
};


export const menuData = [
    {
      title: 'כרטסות',
      subMenu: [
        { title: 'כרטסת לקוחות/ספקים.', component: 'KartisLakohSapak' },
        { title: 'כרטסת פריטים/מלאי.', component: 'InventoryItemsComponent' },
        { title: 'כרטסת קודי עבודה.', component: 'WorkCodesComponent' },
        { title: 'מחירונים.', component: 'PriceListsComponent' },
        { title: 'כרטיסי הכנסות.', component: 'IncomeCardsComponent' },
        { title: 'כרטיסי קניות/הוצאות.', component: 'PurchaseExpenseCardsComponent' },
        { title: 'כרטיסי בנק.', component: 'BankCardsComponent' },
        { title: 'כרטיסי קופה.', component: 'CashRegisterCardsComponent' },
        { title: 'כרטיסי מערכת.', component: 'SystemCardsComponent' },
      ],
    },
    {
      title: 'מסמכים',
      subMenu: [
        { title: 'חשבונית מס.', component: 'InvoiceComponent' },
        { title: 'חשבונית מס קבלה.', component: 'ReceiptInvoiceComponent' },
        { title: 'חש. זיכוי.', component: 'CreditNoteComponent' },
        { title: 'תע.משלוח.', component: 'DeliveryNoteComponent' },
        { title: 'דרישת תשלום', component: 'PaymentRequestComponent' },
        { title: 'השאלה.', component: 'QueryComponent' },
        { title: 'חש.ספק.', component: 'SupplierInvoiceComponent' },
        { title: 'חש.עסקה.', component: 'TransactionInvoiceComponent' },
        { title: 'חשבונית מרכזת יזומה', component: 'CentralizedInvoiceComponent' },
        { title: 'מסמך נגדי', component: 'CounterDocumentComponent' },
        { title: 'חשבונית מרכזת אוטומטית', component: 'AutomatedCentralizedInvoiceComponent' },
      ],
    },
    {
      title: 'קופה',
      subMenu: [
        { title: 'קבלה.', component: 'ReceiptComponent' },
        { title: 'תשלום לספק.', component: 'PaymentToSupplierComponent' },
        { title: 'הפקדה.', component: 'DepositComponent' },
        { title: 'הוצאה מהקופה.', component: 'CashWithdrawalComponent' },
        { title: 'שיק חוזר.', component: 'ReturnedCheckComponent' },
        { title: 'ספר קופה.', component: 'CashRegisterBookComponent' },
        { title: 'תזרים מזומנים.', component: 'CashFlowComponent' },
        { title: 'דוח תשלומים/קבלות.', component: 'PaymentsReceiptsReportComponent' },
      ],
    },
    {
      title: 'העתקים',
      subMenu: [
        { title: 'העתק מסמך.', component: 'DocumentCopyComponent' },
        { title: 'העתקי מסמכים.', component: 'DocumentsCopiesComponent' },
        { title: 'העתקי קבלות.', component: 'ReceiptsCopiesComponent' },
        { title: 'העתקי הפקדות.', component: 'DepositsCopiesComponent' },
        { title: 'העתקי הוצאות.', component: 'ExpensesCopiesComponent' },
      ],
    },
    {
      title: 'טופס מורכב',
      subMenu: [],
    },
    {
      title: 'דוחות',
      subMenu: [
        { title: 'דו"ח מעקב שיקים.', component: 'ChequesFollowUpReportComponent' },
        { title: 'דו"ח אינדקס.', component: 'IndexReportComponent' },
        { title: 'דו"ח מסמכים.', component: 'DocumentsReportComponent' },
        { title: 'דו"ח מחירון.', component: 'PriceListReportComponent' },
        { title: 'דו"ח גיול חובות.', component: 'LiabilitiesGewolReportComponent' },
        { title: 'דו"ח חייבים.', component: 'DebtorsReportComponent' },
        { title: 'דו"ח אובליגו.', component: 'ObligoReportComponent' },
        { title: 'דו"ח מעקב.', component: 'FollowUpReportComponent' },
        { title: 'דו"ח סיכום.', component: 'SummaryReportComponent' },
        { title: 'דוחות מלאי.', component: 'InventoryReportsComponent' },
      ],
    },
    {
      title: 'הנהלת חשבונות',
      subMenu: [
        { title: 'כרטסת הנה"ח.', component: 'AccountingManagementCardComponent' },
        { title: 'תנועת יומן בודדת.', component: 'SingleJournalMovementComponent' },
        { title: 'קליטת מנה זמנית.', component: 'TemporaryDishComponent' },
        { title: 'מאזן בוחן.', component: 'BalanceSheetComponent' },
        { title: 'דו"ח רווח והפסד.', component: 'ProfitLossReportComponent' },
        { title: 'דו"ח תנועות יומן.', component: 'JournalMovementsReportComponent' },
        { title: 'דו"ח תנועה שנתית.', component: 'AnnualMovementReportComponent' },
        { title: 'סגירה תקופתית.', component: 'PeriodicClosingComponent' },
        { title: 'מעקב תנועה חודשי.', component: 'MonthlyMovementTrackingComponent' },
        { title: 'קובץ להנה"ח.', component: 'AccountingManagementFileComponent' },
        { title: 'דו"ח ניכוי במקור.', component: 'SourceDeductionReportComponent' },
        { title: 'דו"ח מע"מ.', component: 'VATReportComponent' },
        { title: 'דו"ח מקדמות.', component: 'PrepaymentsReportComponent' },
        { title: 'דו"ח תקופתי.', component: 'PeriodicReportComponent' },
        { title: 'רציפות אסמכתאות.', component: 'ContinuityCertificatesComponent' },
        { title: 'דיווח אחיד.', component: 'UniformReportingComponent' },
      ],
    },
    {
      title: 'טבלאות',
      subMenu: [],
    },
    {
      title: 'עיבוד תמלילים',
      subMenu: [
        { title: 'עריכת מסמך.', component: 'EditDocumentComponent' },
        { title: 'מכתבים לכרטסת.', component: 'LettersToCardComponent' },
        { title: 'מכתבים לבעלי מסמכים.', component: 'LettersToDocumentOwnersComponent' },
        { title: 'עריכת טופס.', component: 'EditFormComponent' },
        { title: 'הדפס מסמך.', component: 'PrintDocumentComponent' },
      ],
    },
    {
      title: 'שאילתות',
      subMenu: [
        { title: 'דפדוף מסמכים.', component: 'DocumentsBrowsingComponent' },
        { title: 'דפדוף בלקוחות/ספקים.', component: 'CustomersSuppliersBrowsingComponent' },
        { title: 'דפדוף בכרטסת מלאי/פריטים.', component: 'InventoryItemsBrowsingComponent' },
        { title: 'איתור רכיבים בכרטסות.', component: 'CardComponentsSearchComponent' },
        { title: 'לוח שנתי.', component: 'YearlyBoardComponent' },
        { title: 'מנוע חיפוש.', component: 'SearchEngineComponent' },
        { title: 'מידע סטטיסטי.', component: 'StatisticalInformationComponent' },
        { title: 'איתור מידע.', component: 'InformationSearchComponent' },
        { title: 'דף תנועות.', component: 'MovementsPageComponent' },
      ],
    },
    {
      title: 'תצוגה גרפית',
      subMenu: [
        { title: 'התפלגות הכנסות', component: 'IncomeDistributionComponent' },
        { title: 'התפלגות הוצאות.', component: 'ExpenseDistributionComponent' },
        { title: 'גרף רווח הפסד שנתי.', component: 'ProfitLossGraphComponent' },
      ],
    },
    {
      title: 'התאמות',
      subMenu: [
        { title: 'התאמות כרטיסים', component: 'CardAdjustmentsComponent' },
        { title: 'התאמת בנק', component: 'BankAdjustmentComponent' },
      ],
    },
    {
      title: 'תחזוקת מערכת',
      subMenu: [
        { title: 'פרמטרים.', component: 'ParametersComponent' },
        { title: 'לוגו.', component: 'LogoComponent' },
        { title: 'תמונה לכותרת.', component: 'HeaderImageComponent' },
        { title: 'הגדרת מבנה מסמכים.', component: 'DocumentStructureSettingComponent' },
        { title: 'איפוס מערכת.', component: 'SystemResetComponent' },
        { title: 'אינדקסים.', component: 'IndexesComponent' },
        { title: 'שדות כותרת מסמכים.', component: 'DocumentTitleFieldsComponent' },
        { title: 'שמות טורים במבנה מסמך.', component: 'DocumentStructureColumnNamesComponent' },
        { title: 'טבלת מטבעות.', component: 'CurrencyTableComponent' },
      ],
    },
  ];
