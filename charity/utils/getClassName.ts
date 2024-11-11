import classnames from 'classnames';

const getClassNames = (items: (string | undefined | null | boolean)[]) =>
    classnames(items);
export default getClassNames;
