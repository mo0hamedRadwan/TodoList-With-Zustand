import { TranslationsList, setLocalizationConfigurations } from '@mongez/localization';

const translations: TranslationsList = {
  en: {
    title: 'Todo List',
    todo: 'Todo',
    addTodo: 'Add Todo',
    editTodo: 'Edit Todo',
    deleteTodo: 'Delete Todo',
    search: 'Search',
    all: 'All',
    completed: 'Completed',
    incompleted: 'Incompleted',
    notTodos: 'Todo List is empty',
    edit: 'Edit',
    delete: 'Delete',
    todoTitle: 'Todo Title',
    todoDesc: 'Todo Description',
    save: 'Save',
    cancel: 'Cancel',
    sure: 'Sure',
    details: 'Details',
    done: 'Done Successfully',
    alert: 'Are you sure? you need to delete this todo',
    fillAllFields: 'Fill All Fields in a right way',
    createdby: 'Created by',
    author: 'Mohamed Radwan',
    copyrights: 'All rights reserved',
  },
  ar: {
    title: 'قائمة المهام',
    todo: 'المهمة',
    addTodo: 'إضافة مهمة',
    editTodo: 'تعديل المهمة',
    deleteTodo: 'حذف المهمة',
    search: 'بحث',
    all: 'الكل',
    completed: 'المكتملة',
    incompleted: 'الغير مكتملة',
    notTodos: 'لا يوجد اي مهام بالقائمة',
    edit: 'تعديل',
    delete: 'حذف',
    todoTitle: 'عنوان المهمه',
    todoDesc: 'وصف المهمه',
    save: 'حفظ',
    cancel: 'الغاء',
    sure: 'متأكد',
    details: 'التفاصيل',
    done: 'تمت بنجاح',
    alert: 'هل انت متأكد؟ انك تريد حذف هذة المهمة',
    fillAllFields: 'قم بملء جميع الخانات بطريقة صحيحة',
    createdby: 'تم التصميم بواسطة',
    author: 'محمد رضوان',
    copyrights: 'جميع الحقوق محفوظة',
  },
};

setLocalizationConfigurations({
  defaultLocaleCode: 'en',
  fallback: 'ar',
  translations: translations,
});
