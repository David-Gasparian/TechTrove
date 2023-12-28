const interfaceConst = 'interface';

module.exports = (componentName) => `import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cln from './${componentName}.module.scss';
import { memo } from 'react';

${interfaceConst} ${componentName}Props {
    className?: string;
}

export const ${componentName} = memo((props: ${componentName}Props) => {
    const { className } = props;
    const { t } = useTranslation();
    
    return (
        <div className={classNames(cln.${componentName}, {}, [className])}>
           
        </div>
    );
});`;
