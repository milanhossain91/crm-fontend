/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

/// <reference types="unplugin-vue-router/client" />

import type {
  // type safe route locations
  RouteLocationTypedList,
  RouteLocationResolvedTypedList,
  RouteLocationNormalizedTypedList,
  RouteLocationNormalizedLoadedTypedList,
  RouteLocationAsString,
  RouteLocationAsRelativeTypedList,
  RouteLocationAsPathTypedList,

  // helper types
  // route definitions
  RouteRecordInfo,
  ParamValue,
  ParamValueOneOrMore,
  ParamValueZeroOrMore,
  ParamValueZeroOrOne,

  // vue-router extensions
  _RouterTyped,
  RouterLinkTyped,
  RouterLinkPropsTyped,
  NavigationGuard,
  UseLinkFnTyped,

  // data fetching
  _DataLoader,
  _DefineLoaderOptions,
} from 'unplugin-vue-router/types'

declare module 'vue-router/auto/routes' {
  export interface RouteNamedMap {
    '$error': RouteRecordInfo<'$error', '/:error(.*)', { error: ParamValue<true> }, { error: ParamValue<false> }>,
    'access-control': RouteRecordInfo<'access-control', '/access-control', Record<never, never>, Record<never, never>>,
    'apps-academy-course-details': RouteRecordInfo<'apps-academy-course-details', '/apps/academy/course-details', Record<never, never>, Record<never, never>>,
    'apps-academy-dashboard': RouteRecordInfo<'apps-academy-dashboard', '/apps/academy/dashboard', Record<never, never>, Record<never, never>>,
    'apps-academy-my-course': RouteRecordInfo<'apps-academy-my-course', '/apps/academy/my-course', Record<never, never>, Record<never, never>>,
    'apps-assets': RouteRecordInfo<'apps-assets', '/apps/assets', Record<never, never>, Record<never, never>>,
    'apps-assets-edit-id': RouteRecordInfo<'apps-assets-edit-id', '/apps/assets/edit/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'apps-assets-list': RouteRecordInfo<'apps-assets-list', '/apps/assets/list', Record<never, never>, Record<never, never>>,
    'apps-banks': RouteRecordInfo<'apps-banks', '/apps/banks', Record<never, never>, Record<never, never>>,
    'apps-banks-edit-id': RouteRecordInfo<'apps-banks-edit-id', '/apps/banks/edit/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'apps-banks-list': RouteRecordInfo<'apps-banks-list', '/apps/banks/list', Record<never, never>, Record<never, never>>,
    'apps-brands': RouteRecordInfo<'apps-brands', '/apps/brands', Record<never, never>, Record<never, never>>,
    'apps-brands-create': RouteRecordInfo<'apps-brands-create', '/apps/brands/create', Record<never, never>, Record<never, never>>,
    'apps-brands-edit-id': RouteRecordInfo<'apps-brands-edit-id', '/apps/brands/edit/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'apps-calendar': RouteRecordInfo<'apps-calendar', '/apps/calendar', Record<never, never>, Record<never, never>>,
    'apps-categories': RouteRecordInfo<'apps-categories', '/apps/categories', Record<never, never>, Record<never, never>>,
    'apps-categories-edit-id': RouteRecordInfo<'apps-categories-edit-id', '/apps/categories/edit/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'apps-categories-list': RouteRecordInfo<'apps-categories-list', '/apps/categories/list', Record<never, never>, Record<never, never>>,
    'apps-chat': RouteRecordInfo<'apps-chat', '/apps/chat', Record<never, never>, Record<never, never>>,
    'apps-currencies': RouteRecordInfo<'apps-currencies', '/apps/currencies', Record<never, never>, Record<never, never>>,
    'apps-currencies-create': RouteRecordInfo<'apps-currencies-create', '/apps/currencies/create', Record<never, never>, Record<never, never>>,
    'apps-currencies-edit-id': RouteRecordInfo<'apps-currencies-edit-id', '/apps/currencies/edit/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'apps-customers': RouteRecordInfo<'apps-customers', '/apps/customers', Record<never, never>, Record<never, never>>,
    'apps-customers-details-slug': RouteRecordInfo<'apps-customers-details-slug', '/apps/customers/details/:slug', { slug: ParamValue<true> }, { slug: ParamValue<false> }>,
    'apps-customers-edit-id': RouteRecordInfo<'apps-customers-edit-id', '/apps/customers/edit/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'apps-customers-list': RouteRecordInfo<'apps-customers-list', '/apps/customers/list', Record<never, never>, Record<never, never>>,
    'apps-ecommerce-customer-details-id': RouteRecordInfo<'apps-ecommerce-customer-details-id', '/apps/ecommerce/customer/details/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'apps-ecommerce-customer-list': RouteRecordInfo<'apps-ecommerce-customer-list', '/apps/ecommerce/customer/list', Record<never, never>, Record<never, never>>,
    'apps-ecommerce-manage-review': RouteRecordInfo<'apps-ecommerce-manage-review', '/apps/ecommerce/manage-review', Record<never, never>, Record<never, never>>,
    'apps-ecommerce-order-details-id': RouteRecordInfo<'apps-ecommerce-order-details-id', '/apps/ecommerce/order/details/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'apps-ecommerce-order-list': RouteRecordInfo<'apps-ecommerce-order-list', '/apps/ecommerce/order/list', Record<never, never>, Record<never, never>>,
    'apps-ecommerce-product-add': RouteRecordInfo<'apps-ecommerce-product-add', '/apps/ecommerce/product/add', Record<never, never>, Record<never, never>>,
    'apps-ecommerce-product-category-list': RouteRecordInfo<'apps-ecommerce-product-category-list', '/apps/ecommerce/product/category-list', Record<never, never>, Record<never, never>>,
    'apps-ecommerce-product-list': RouteRecordInfo<'apps-ecommerce-product-list', '/apps/ecommerce/product/list', Record<never, never>, Record<never, never>>,
    'apps-ecommerce-referrals': RouteRecordInfo<'apps-ecommerce-referrals', '/apps/ecommerce/referrals', Record<never, never>, Record<never, never>>,
    'apps-ecommerce-settings': RouteRecordInfo<'apps-ecommerce-settings', '/apps/ecommerce/settings', Record<never, never>, Record<never, never>>,
    'apps-email': RouteRecordInfo<'apps-email', '/apps/email', Record<never, never>, Record<never, never>>,
    'apps-employees-departments': RouteRecordInfo<'apps-employees-departments', '/apps/employees/departments', Record<never, never>, Record<never, never>>,
    'apps-employees-departments-id': RouteRecordInfo<'apps-employees-departments-id', '/apps/employees/departments/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'apps-employees-departments-create': RouteRecordInfo<'apps-employees-departments-create', '/apps/employees/departments/create', Record<never, never>, Record<never, never>>,
    'apps-employees-increments': RouteRecordInfo<'apps-employees-increments', '/apps/employees/increments', Record<never, never>, Record<never, never>>,
    'apps-employees-list': RouteRecordInfo<'apps-employees-list', '/apps/employees/list', Record<never, never>, Record<never, never>>,
    'apps-expenseattachments': RouteRecordInfo<'apps-expenseattachments', '/apps/expenseattachments', Record<never, never>, Record<never, never>>,
    'apps-expenseattachments-edit-id': RouteRecordInfo<'apps-expenseattachments-edit-id', '/apps/expenseattachments/edit/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'apps-expenseattachments-list': RouteRecordInfo<'apps-expenseattachments-list', '/apps/expenseattachments/list', Record<never, never>, Record<never, never>>,
    'apps-expenseheads': RouteRecordInfo<'apps-expenseheads', '/apps/expenseheads', Record<never, never>, Record<never, never>>,
    'apps-expenseheads-edit-id': RouteRecordInfo<'apps-expenseheads-edit-id', '/apps/expenseheads/edit/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'apps-expenseheads-list': RouteRecordInfo<'apps-expenseheads-list', '/apps/expenseheads/list', Record<never, never>, Record<never, never>>,
    'apps-expenses': RouteRecordInfo<'apps-expenses', '/apps/expenses', Record<never, never>, Record<never, never>>,
    'apps-expenses-edit-id': RouteRecordInfo<'apps-expenses-edit-id', '/apps/expenses/edit/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'apps-expenses-list': RouteRecordInfo<'apps-expenses-list', '/apps/expenses/list', Record<never, never>, Record<never, never>>,
    'apps-invoice-add': RouteRecordInfo<'apps-invoice-add', '/apps/invoice/add', Record<never, never>, Record<never, never>>,
    'apps-invoice-edit-id': RouteRecordInfo<'apps-invoice-edit-id', '/apps/invoice/edit/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'apps-invoice-list': RouteRecordInfo<'apps-invoice-list', '/apps/invoice/list', Record<never, never>, Record<never, never>>,
    'apps-invoice-preview-id': RouteRecordInfo<'apps-invoice-preview-id', '/apps/invoice/preview/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'apps-logistics-dashboard': RouteRecordInfo<'apps-logistics-dashboard', '/apps/logistics/dashboard', Record<never, never>, Record<never, never>>,
    'apps-logistics-fleet': RouteRecordInfo<'apps-logistics-fleet', '/apps/logistics/fleet', Record<never, never>, Record<never, never>>,
    'apps-paymentmethod': RouteRecordInfo<'apps-paymentmethod', '/apps/paymentmethod', Record<never, never>, Record<never, never>>,
    'apps-paymentmethod-create': RouteRecordInfo<'apps-paymentmethod-create', '/apps/paymentmethod/create', Record<never, never>, Record<never, never>>,
    'apps-paymentmethod-edit-id': RouteRecordInfo<'apps-paymentmethod-edit-id', '/apps/paymentmethod/edit/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'apps-permissions': RouteRecordInfo<'apps-permissions', '/apps/permissions', Record<never, never>, Record<never, never>>,
    'apps-products': RouteRecordInfo<'apps-products', '/apps/products', Record<never, never>, Record<never, never>>,
    'apps-products-create': RouteRecordInfo<'apps-products-create', '/apps/products/create', Record<never, never>, Record<never, never>>,
    'apps-products-edit-id': RouteRecordInfo<'apps-products-edit-id', '/apps/products/edit/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'apps-purchases': RouteRecordInfo<'apps-purchases', '/apps/purchases', Record<never, never>, Record<never, never>>,
    'apps-purchases-create': RouteRecordInfo<'apps-purchases-create', '/apps/purchases/create', Record<never, never>, Record<never, never>>,
    'apps-purchases-details-slug': RouteRecordInfo<'apps-purchases-details-slug', '/apps/purchases/details/:slug', { slug: ParamValue<true> }, { slug: ParamValue<false> }>,
    'apps-purchases-edit-id': RouteRecordInfo<'apps-purchases-edit-id', '/apps/purchases/edit/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'apps-purchases-return': RouteRecordInfo<'apps-purchases-return', '/apps/purchases/return', Record<never, never>, Record<never, never>>,
    'apps-purchases-returncreate': RouteRecordInfo<'apps-purchases-returncreate', '/apps/purchases/returncreate', Record<never, never>, Record<never, never>>,
    'apps-purchases-returnedit': RouteRecordInfo<'apps-purchases-returnedit', '/apps/purchases/returnedit', Record<never, never>, Record<never, never>>,
    'apps-roles': RouteRecordInfo<'apps-roles', '/apps/roles', Record<never, never>, Record<never, never>>,
    'apps-roles-edit-id': RouteRecordInfo<'apps-roles-edit-id', '/apps/roles/edit/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'apps-sales': RouteRecordInfo<'apps-sales', '/apps/sales', Record<never, never>, Record<never, never>>,
    'apps-sales-edit-id': RouteRecordInfo<'apps-sales-edit-id', '/apps/sales/edit/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'apps-sales-list': RouteRecordInfo<'apps-sales-list', '/apps/sales/list', Record<never, never>, Record<never, never>>,
    'apps-sales-pos': RouteRecordInfo<'apps-sales-pos', '/apps/sales/pos', Record<never, never>, Record<never, never>>,
    'apps-sales-pos-copy': RouteRecordInfo<'apps-sales-pos-copy', '/apps/sales/pos-copy', Record<never, never>, Record<never, never>>,
    'apps-subcategories': RouteRecordInfo<'apps-subcategories', '/apps/subcategories', Record<never, never>, Record<never, never>>,
    'apps-subcategories-edit-id': RouteRecordInfo<'apps-subcategories-edit-id', '/apps/subcategories/edit/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'apps-subcategories-list': RouteRecordInfo<'apps-subcategories-list', '/apps/subcategories/list', Record<never, never>, Record<never, never>>,
    'apps-suppliers': RouteRecordInfo<'apps-suppliers', '/apps/suppliers', Record<never, never>, Record<never, never>>,
    'apps-suppliers-details-slug': RouteRecordInfo<'apps-suppliers-details-slug', '/apps/suppliers/details/:slug', { slug: ParamValue<true> }, { slug: ParamValue<false> }>,
    'apps-suppliers-edit-id': RouteRecordInfo<'apps-suppliers-edit-id', '/apps/suppliers/edit/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'apps-suppliers-list': RouteRecordInfo<'apps-suppliers-list', '/apps/suppliers/list', Record<never, never>, Record<never, never>>,
    'apps-tabc': RouteRecordInfo<'apps-tabc', '/apps/tabc', Record<never, never>, Record<never, never>>,
    'apps-tabc-edit-id': RouteRecordInfo<'apps-tabc-edit-id', '/apps/tabc/edit/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'apps-tabc-list': RouteRecordInfo<'apps-tabc-list', '/apps/tabc/list', Record<never, never>, Record<never, never>>,
    'apps-units': RouteRecordInfo<'apps-units', '/apps/units', Record<never, never>, Record<never, never>>,
    'apps-units-create': RouteRecordInfo<'apps-units-create', '/apps/units/create', Record<never, never>, Record<never, never>>,
    'apps-units-edit-id': RouteRecordInfo<'apps-units-edit-id', '/apps/units/edit/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'apps-user-edit-id': RouteRecordInfo<'apps-user-edit-id', '/apps/user/edit/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'apps-user-list': RouteRecordInfo<'apps-user-list', '/apps/user/list', Record<never, never>, Record<never, never>>,
    'apps-user-view-id': RouteRecordInfo<'apps-user-view-id', '/apps/user/view/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'apps-vat': RouteRecordInfo<'apps-vat', '/apps/vat', Record<never, never>, Record<never, never>>,
    'apps-vat-create': RouteRecordInfo<'apps-vat-create', '/apps/vat/create', Record<never, never>, Record<never, never>>,
    'apps-vat-edit-id': RouteRecordInfo<'apps-vat-edit-id', '/apps/vat/edit/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'apps-email-filter': RouteRecordInfo<'apps-email-filter', '/apps/email/:filter', { filter: ParamValue<true> }, { filter: ParamValue<false> }>,
    'apps-email-label': RouteRecordInfo<'apps-email-label', '/apps/email/:label', { label: ParamValue<true> }, { label: ParamValue<false> }>,
    'charts-apex-chart': RouteRecordInfo<'charts-apex-chart', '/charts/apex-chart', Record<never, never>, Record<never, never>>,
    'charts-chartjs': RouteRecordInfo<'charts-chartjs', '/charts/chartjs', Record<never, never>, Record<never, never>>,
    'components-alert': RouteRecordInfo<'components-alert', '/components/alert', Record<never, never>, Record<never, never>>,
    'components-avatar': RouteRecordInfo<'components-avatar', '/components/avatar', Record<never, never>, Record<never, never>>,
    'components-badge': RouteRecordInfo<'components-badge', '/components/badge', Record<never, never>, Record<never, never>>,
    'components-button': RouteRecordInfo<'components-button', '/components/button', Record<never, never>, Record<never, never>>,
    'components-chip': RouteRecordInfo<'components-chip', '/components/chip', Record<never, never>, Record<never, never>>,
    'components-dialog': RouteRecordInfo<'components-dialog', '/components/dialog', Record<never, never>, Record<never, never>>,
    'components-expansion-panel': RouteRecordInfo<'components-expansion-panel', '/components/expansion-panel', Record<never, never>, Record<never, never>>,
    'components-list': RouteRecordInfo<'components-list', '/components/list', Record<never, never>, Record<never, never>>,
    'components-menu': RouteRecordInfo<'components-menu', '/components/menu', Record<never, never>, Record<never, never>>,
    'components-pagination': RouteRecordInfo<'components-pagination', '/components/pagination', Record<never, never>, Record<never, never>>,
    'components-progress-circular': RouteRecordInfo<'components-progress-circular', '/components/progress-circular', Record<never, never>, Record<never, never>>,
    'components-progress-linear': RouteRecordInfo<'components-progress-linear', '/components/progress-linear', Record<never, never>, Record<never, never>>,
    'components-snackbar': RouteRecordInfo<'components-snackbar', '/components/snackbar', Record<never, never>, Record<never, never>>,
    'components-tabs': RouteRecordInfo<'components-tabs', '/components/tabs', Record<never, never>, Record<never, never>>,
    'components-timeline': RouteRecordInfo<'components-timeline', '/components/timeline', Record<never, never>, Record<never, never>>,
    'components-tooltip': RouteRecordInfo<'components-tooltip', '/components/tooltip', Record<never, never>, Record<never, never>>,
    'dashboards-analytics': RouteRecordInfo<'dashboards-analytics', '/dashboards/analytics', Record<never, never>, Record<never, never>>,
    'dashboards-crm': RouteRecordInfo<'dashboards-crm', '/dashboards/crm', Record<never, never>, Record<never, never>>,
    'dashboards-ecommerce': RouteRecordInfo<'dashboards-ecommerce', '/dashboards/ecommerce', Record<never, never>, Record<never, never>>,
    'extensions-swiper': RouteRecordInfo<'extensions-swiper', '/extensions/swiper', Record<never, never>, Record<never, never>>,
    'extensions-tour': RouteRecordInfo<'extensions-tour', '/extensions/tour', Record<never, never>, Record<never, never>>,
    'forgot-password': RouteRecordInfo<'forgot-password', '/forgot-password', Record<never, never>, Record<never, never>>,
    'forms-autocomplete': RouteRecordInfo<'forms-autocomplete', '/forms/autocomplete', Record<never, never>, Record<never, never>>,
    'forms-checkbox': RouteRecordInfo<'forms-checkbox', '/forms/checkbox', Record<never, never>, Record<never, never>>,
    'forms-combobox': RouteRecordInfo<'forms-combobox', '/forms/combobox', Record<never, never>, Record<never, never>>,
    'forms-custom-input': RouteRecordInfo<'forms-custom-input', '/forms/custom-input', Record<never, never>, Record<never, never>>,
    'forms-date-time-picker': RouteRecordInfo<'forms-date-time-picker', '/forms/date-time-picker', Record<never, never>, Record<never, never>>,
    'forms-editors': RouteRecordInfo<'forms-editors', '/forms/editors', Record<never, never>, Record<never, never>>,
    'forms-file-input': RouteRecordInfo<'forms-file-input', '/forms/file-input', Record<never, never>, Record<never, never>>,
    'forms-form-layouts': RouteRecordInfo<'forms-form-layouts', '/forms/form-layouts', Record<never, never>, Record<never, never>>,
    'forms-form-validation': RouteRecordInfo<'forms-form-validation', '/forms/form-validation', Record<never, never>, Record<never, never>>,
    'forms-form-wizard-icons': RouteRecordInfo<'forms-form-wizard-icons', '/forms/form-wizard-icons', Record<never, never>, Record<never, never>>,
    'forms-form-wizard-numbered': RouteRecordInfo<'forms-form-wizard-numbered', '/forms/form-wizard-numbered', Record<never, never>, Record<never, never>>,
    'forms-radio': RouteRecordInfo<'forms-radio', '/forms/radio', Record<never, never>, Record<never, never>>,
    'forms-range-slider': RouteRecordInfo<'forms-range-slider', '/forms/range-slider', Record<never, never>, Record<never, never>>,
    'forms-rating': RouteRecordInfo<'forms-rating', '/forms/rating', Record<never, never>, Record<never, never>>,
    'forms-select': RouteRecordInfo<'forms-select', '/forms/select', Record<never, never>, Record<never, never>>,
    'forms-slider': RouteRecordInfo<'forms-slider', '/forms/slider', Record<never, never>, Record<never, never>>,
    'forms-switch': RouteRecordInfo<'forms-switch', '/forms/switch', Record<never, never>, Record<never, never>>,
    'forms-textarea': RouteRecordInfo<'forms-textarea', '/forms/textarea', Record<never, never>, Record<never, never>>,
    'forms-textfield': RouteRecordInfo<'forms-textfield', '/forms/textfield', Record<never, never>, Record<never, never>>,
    'front-pages-checkout': RouteRecordInfo<'front-pages-checkout', '/front-pages/checkout', Record<never, never>, Record<never, never>>,
    'front-pages-help-center': RouteRecordInfo<'front-pages-help-center', '/front-pages/help-center', Record<never, never>, Record<never, never>>,
    'front-pages-help-center-article-title': RouteRecordInfo<'front-pages-help-center-article-title', '/front-pages/help-center/article/:title', { title: ParamValue<true> }, { title: ParamValue<false> }>,
    'front-pages-landing-page': RouteRecordInfo<'front-pages-landing-page', '/front-pages/landing-page', Record<never, never>, Record<never, never>>,
    'front-pages-payment': RouteRecordInfo<'front-pages-payment', '/front-pages/payment', Record<never, never>, Record<never, never>>,
    'front-pages-pricing': RouteRecordInfo<'front-pages-pricing', '/front-pages/pricing', Record<never, never>, Record<never, never>>,
    'login': RouteRecordInfo<'login', '/login', Record<never, never>, Record<never, never>>,
    'not-authorized': RouteRecordInfo<'not-authorized', '/not-authorized', Record<never, never>, Record<never, never>>,
    'pages-account-settings-tab': RouteRecordInfo<'pages-account-settings-tab', '/pages/account-settings/:tab', { tab: ParamValue<true> }, { tab: ParamValue<false> }>,
    'pages-authentication-forgot-password-v1': RouteRecordInfo<'pages-authentication-forgot-password-v1', '/pages/authentication/forgot-password-v1', Record<never, never>, Record<never, never>>,
    'pages-authentication-forgot-password-v2': RouteRecordInfo<'pages-authentication-forgot-password-v2', '/pages/authentication/forgot-password-v2', Record<never, never>, Record<never, never>>,
    'pages-authentication-login-v1': RouteRecordInfo<'pages-authentication-login-v1', '/pages/authentication/login-v1', Record<never, never>, Record<never, never>>,
    'pages-authentication-login-v2': RouteRecordInfo<'pages-authentication-login-v2', '/pages/authentication/login-v2', Record<never, never>, Record<never, never>>,
    'pages-authentication-register-multi-steps': RouteRecordInfo<'pages-authentication-register-multi-steps', '/pages/authentication/register-multi-steps', Record<never, never>, Record<never, never>>,
    'pages-authentication-register-v1': RouteRecordInfo<'pages-authentication-register-v1', '/pages/authentication/register-v1', Record<never, never>, Record<never, never>>,
    'pages-authentication-register-v2': RouteRecordInfo<'pages-authentication-register-v2', '/pages/authentication/register-v2', Record<never, never>, Record<never, never>>,
    'pages-authentication-reset-password-v1': RouteRecordInfo<'pages-authentication-reset-password-v1', '/pages/authentication/reset-password-v1', Record<never, never>, Record<never, never>>,
    'pages-authentication-reset-password-v2': RouteRecordInfo<'pages-authentication-reset-password-v2', '/pages/authentication/reset-password-v2', Record<never, never>, Record<never, never>>,
    'pages-authentication-two-steps-v1': RouteRecordInfo<'pages-authentication-two-steps-v1', '/pages/authentication/two-steps-v1', Record<never, never>, Record<never, never>>,
    'pages-authentication-two-steps-v2': RouteRecordInfo<'pages-authentication-two-steps-v2', '/pages/authentication/two-steps-v2', Record<never, never>, Record<never, never>>,
    'pages-authentication-verify-email-v1': RouteRecordInfo<'pages-authentication-verify-email-v1', '/pages/authentication/verify-email-v1', Record<never, never>, Record<never, never>>,
    'pages-authentication-verify-email-v2': RouteRecordInfo<'pages-authentication-verify-email-v2', '/pages/authentication/verify-email-v2', Record<never, never>, Record<never, never>>,
    'pages-cards-card-actions': RouteRecordInfo<'pages-cards-card-actions', '/pages/cards/card-actions', Record<never, never>, Record<never, never>>,
    'pages-cards-card-advance': RouteRecordInfo<'pages-cards-card-advance', '/pages/cards/card-advance', Record<never, never>, Record<never, never>>,
    'pages-cards-card-basic': RouteRecordInfo<'pages-cards-card-basic', '/pages/cards/card-basic', Record<never, never>, Record<never, never>>,
    'pages-cards-card-statistics': RouteRecordInfo<'pages-cards-card-statistics', '/pages/cards/card-statistics', Record<never, never>, Record<never, never>>,
    'pages-cards-card-widgets': RouteRecordInfo<'pages-cards-card-widgets', '/pages/cards/card-widgets', Record<never, never>, Record<never, never>>,
    'pages-dialog-examples': RouteRecordInfo<'pages-dialog-examples', '/pages/dialog-examples', Record<never, never>, Record<never, never>>,
    'pages-faq': RouteRecordInfo<'pages-faq', '/pages/faq', Record<never, never>, Record<never, never>>,
    'pages-icons': RouteRecordInfo<'pages-icons', '/pages/icons', Record<never, never>, Record<never, never>>,
    'pages-misc-coming-soon': RouteRecordInfo<'pages-misc-coming-soon', '/pages/misc/coming-soon', Record<never, never>, Record<never, never>>,
    'pages-misc-under-maintenance': RouteRecordInfo<'pages-misc-under-maintenance', '/pages/misc/under-maintenance', Record<never, never>, Record<never, never>>,
    'pages-pricing': RouteRecordInfo<'pages-pricing', '/pages/pricing', Record<never, never>, Record<never, never>>,
    'pages-typography': RouteRecordInfo<'pages-typography', '/pages/typography', Record<never, never>, Record<never, never>>,
    'pages-user-profile-tab': RouteRecordInfo<'pages-user-profile-tab', '/pages/user-profile/:tab', { tab: ParamValue<true> }, { tab: ParamValue<false> }>,
    'register': RouteRecordInfo<'register', '/register', Record<never, never>, Record<never, never>>,
    'tables-data-table': RouteRecordInfo<'tables-data-table', '/tables/data-table', Record<never, never>, Record<never, never>>,
    'tables-simple-table': RouteRecordInfo<'tables-simple-table', '/tables/simple-table', Record<never, never>, Record<never, never>>,
    'wizard-examples-checkout': RouteRecordInfo<'wizard-examples-checkout', '/wizard-examples/checkout', Record<never, never>, Record<never, never>>,
    'wizard-examples-create-deal': RouteRecordInfo<'wizard-examples-create-deal', '/wizard-examples/create-deal', Record<never, never>, Record<never, never>>,
    'wizard-examples-property-listing': RouteRecordInfo<'wizard-examples-property-listing', '/wizard-examples/property-listing', Record<never, never>, Record<never, never>>,
  }
}

declare module 'vue-router/auto' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export type RouterTyped = _RouterTyped<RouteNamedMap>

  /**
   * Type safe version of `RouteLocationNormalized` (the type of `to` and `from` in navigation guards).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalized<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationNormalizedLoaded` (the return type of `useRoute()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalizedLoaded<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationResolved` (the returned route of `router.resolve()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationResolved<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationResolvedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocation` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocation<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationRaw` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationRaw<Name extends keyof RouteNamedMap = keyof RouteNamedMap> =
    | RouteLocationAsString<RouteNamedMap>
    | RouteLocationAsRelativeTypedList<RouteNamedMap>[Name]
    | RouteLocationAsPathTypedList<RouteNamedMap>[Name]

  /**
   * Generate a type safe params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParams<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['params']
  /**
   * Generate a type safe raw params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParamsRaw<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['paramsRaw']

  export function useRouter(): RouterTyped
  export function useRoute<Name extends keyof RouteNamedMap = keyof RouteNamedMap>(name?: Name): RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  export const useLink: UseLinkFnTyped<RouteNamedMap>

  export function onBeforeRouteLeave(guard: NavigationGuard<RouteNamedMap>): void
  export function onBeforeRouteUpdate(guard: NavigationGuard<RouteNamedMap>): void

  export const RouterLink: RouterLinkTyped<RouteNamedMap>
  export const RouterLinkProps: RouterLinkPropsTyped<RouteNamedMap>

  // Experimental Data Fetching

  export function defineLoader<
    P extends Promise<any>,
    Name extends keyof RouteNamedMap = keyof RouteNamedMap,
    isLazy extends boolean = false,
  >(
    name: Name,
    loader: (route: RouteLocationNormalizedLoaded<Name>) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>
  export function defineLoader<
    P extends Promise<any>,
    isLazy extends boolean = false,
  >(
    loader: (route: RouteLocationNormalizedLoaded) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>

  export {
    _definePage as definePage,
    _HasDataLoaderMeta as HasDataLoaderMeta,
    _setupDataFetchingGuard as setupDataFetchingGuard,
    _stopDataFetchingScope as stopDataFetchingScope,
  } from 'unplugin-vue-router/runtime'
}

declare module 'vue-router' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export interface TypesConfig {
    beforeRouteUpdate: NavigationGuard<RouteNamedMap>
    beforeRouteLeave: NavigationGuard<RouteNamedMap>

    $route: RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[keyof RouteNamedMap]
    $router: _RouterTyped<RouteNamedMap>

    RouterLink: RouterLinkTyped<RouteNamedMap>
  }
}
