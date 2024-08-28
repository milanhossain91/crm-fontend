export default [
  {
    title: 'Attendence',
    icon: { icon: 'tabler-typography' },
    to: 'apps-attendence-list',
  },
  {
    title: 'Collection',
    icon: { icon: 'tabler-shield-lock' },
    to: 'apps-collection-list',
  },
  {
    title: 'Followup',
    icon: { icon: 'tabler-command' },
    to: 'apps-followup-list',
  },
  {
    title: 'Lead',
    icon: { icon: 'tabler-square' },
    to: 'apps-lead-list',
  },
  {
    title: 'Order',
    icon: { icon: 'tabler-shopping-cart' },
    to: 'apps-order-list',
  },
  {
    title: 'Prospect',
    icon: { icon: 'tabler-chart-donut-2' },
    to: 'apps-prospect-list',
  },
  {
    title: 'Quotation',
    icon: { icon: 'tabler-dots' },
    to: 'apps-quotation-list',
  },
  {
    title: 'Supplier',
    icon: { icon: 'tabler-user' },
    to: 'apps-supplier-list',
  },
  {
    title: 'Task',
    icon: { icon: 'tabler-message-circle-2' },
    to: 'apps-task-list',
  },

  {
    title: 'User Management',
    icon: { icon: 'tabler-users-group' },
    children: [
      { title: 'User',   to: 'apps-user-list'  },
      { title: 'Role', to: 'apps-roles' },
      { title: 'Permissions', to: 'apps-permissions' },

      // { title: 'Currencies', to: 'apps-currencies' },
      // { title: 'Units', to: 'apps-units' },
      // { title: 'Vat', to: 'apps-vat' },
      // { title: 'Brands', to: 'apps-brands' },
      // { title: 'Payment Methods', to: 'apps-paymentmethod' },
    ],
  },


  {
    title: 'Settings',
    icon: { icon: 'tabler-settings' },
    children: [
      { title: 'Country', to: 'apps-country-list' },
      { title: 'Zone', to: 'apps-zone-list' },
      { title: 'Organization Type', to: 'apps-organizationtype-list' },
      { title: 'Business Industry', to: 'apps-businessindustry-list' },
      { title: 'Designation', to: 'apps-designation-list' },
      { title: 'Departments', to: 'apps-departments-list' },
      { title: 'Professions', to: 'apps-professions-list' },
      { title: 'Job Types', to: 'apps-jobtypes-list' },
      { title: 'Genders', to: 'apps-genders-list' },
      { title: 'Influencing Roles', to: 'apps-influencingroles-list' },
      { title: 'Key Account Persons', to: 'apps-keyaccountpersons-list' },
      { title: 'Industry Types', to: 'apps-industrytypes-list' },
      { title: 'Divisions', to: 'apps-divisions-list' },
      { title: 'Districts', to: 'apps-districts-list' },
      { title: 'Thana', to: 'apps-thana-list' },
      { title: 'Win Probabilities', to: 'apps-winprobabilities-list' },
    ],
  },




  // {
  //   title: 'Product Management',
  //   icon: { icon: 'tabler-brand-databricks' },
  //   children: [
  //     { title: 'Categories',   to: 'apps-categories-list'  },
  //     { title: 'Subcategories', to: 'apps-subcategories-list' },
  //     { title: 'Products', to: 'apps-products' },
  //   ],
  // },
  // {
  //   title: 'HR',
  //   icon: { icon: 'tabler-carousel-vertical' },
  //   children: [
  //     { title: 'Clients',   to: 'apps-customers-list' },
  //     { title: 'Suppliers', to: 'apps-suppliers-list' },
  //     { title: 'Employess', to: 'apps-suppliers-list', 
  //       children: [
  //         { title: 'Departments',   to: 'apps-employees-departments'  },
  //         { title: 'Employees List', to: 'apps-employees-list' },
  //         { title: 'Increments', to: 'apps-employees-increments' },
         
  //       ] },
  //   ],
  // },
  // {
  //   title: 'Purchases',
  //   icon: { icon: 'tabler-shopping-bag' },
  //   children: [
  //     { title: 'Purchase List',   to: 'apps-purchases' },
  //     { title: 'Return List', to: 'apps-purchases-return' },
  //   ],
  // },
  // {
  //   title: 'Sales',
  //   icon: { icon: 'tabler-notes' },
  //   children: [
  //     { title: 'Invoice List', to: 'apps-sales-listinvoice' },
  //     { title: 'POS', to: 'apps-sales-pos' },
  //     { title: 'Return Invoices', to: 'apps-sales-list' },
  //   ],
  // },
  // {
  //   title: 'Accounting',
  //   icon: { icon: 'tabler-invoice' },
  //   children: [
  //     {
  //       title: 'Assets',
  //       to: 'apps-assets-list', 
  //     },
  //     {
  //       title: 'Banks',
  //       to: 'apps-banks-list',
  //     },
  //     {
  //       title: 'Expense',
  //       to: 'apps-expenses-list',
  //     },
  //     {
  //       title: 'Expense Attachments',
  //       to: 'apps-expenseattachments-list', 
  //     },
  //   ],
  // },

  // {
  //   title: 'Report',
  //   icon: { icon: 'tabler-invoice' },
  //   to: 'apps-products-list',
  // },

]
