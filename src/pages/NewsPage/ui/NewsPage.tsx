import { FC } from "react";
import { useTranslation } from "react-i18next";

const NewsPage: FC = () => {

    const { t } = useTranslation('news');

    return (
        <div>
            {t('news')}
        </div>
    )
}


export default NewsPage;