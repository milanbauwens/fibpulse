import { useQuery } from '@tanstack/react-query';
import { View } from 'react-native';

import {
  getHighestAmountOfActivities,
  getHighestAmountOfSymptoms,
} from '../../core/db/modules/episodes/api';
import { useTranslations } from '../../core/i18n/LocaleProvider';
import { getAmountPerActivity } from '../../core/utils/episode/getAmountPerActivity';
import { getAmountPerSymptom } from '../../core/utils/episode/getAmountPerSymptom';
import InsightCard from '../InsightCard/InsightCard';
import Card from '../common/Card/Card';
import { Paragraph, Title } from '../common/Typography';

const Insights = () => {
  const { t } = useTranslations();

  // Fetch activities
  const { data: activities, isLoading: activityLoading } = useQuery(
    ['activities'],
    getHighestAmountOfActivities
  );

  // Fetch symptoms
  const { data: symptoms, isLoading: symptomsLoading } = useQuery(
    ['symptoms'],
    getHighestAmountOfSymptoms
  );

  const { count, activity } =
    !activityLoading && activities.data.length > 0 && getAmountPerActivity(activities.data);
  const symptom =
    !symptomsLoading && symptoms.data.length > 0 && getAmountPerSymptom(symptoms.data);

  let icon;
  switch (activity) {
    case 'sleeping':
      icon = 'night-outline';
      break;
    case 'sitting':
      icon = 'chair-outline';
      break;
    case 'standing':
      icon = 'cactus-outline';
      break;
    case 'walking':
      icon = 'walk-outline';
      break;
    case 'sports':
      icon = 'kayak-outline';
      break;
    case 'other':
      icon = 'dots-horizontal';
      break;
  }

  return (
    <>
      {!symptomsLoading &&
      !activityLoading &&
      activities.data.length > 0 &&
      symptoms.data.length > 0 ? (
        <View>
          <InsightCard variant="ochre" icon={icon}>
            {t('home.insights.activity.start')}{' '}
            <Paragraph isStrong>{t('home.insights.activity.count', { count })}</Paragraph>{' '}
            {t('home.insights.activity.last')}{' '}
            <Paragraph isStrong>
              {t(`episodes.intake.activity.options.${activity}`).toLocaleLowerCase()}.
            </Paragraph>
          </InsightCard>
          <InsightCard isLast variant="turquoise" icon="file-heart-outline">
            {symptom === 'none' ? (
              <Paragraph>{t('home.insights.symptoms.emptyState')}</Paragraph>
            ) : (
              <>
                <Paragraph isStrong>{t(`episodes.intake.symptoms.options.${symptom}`)}</Paragraph>{' '}
                {t('home.insights.symptoms.default')}
              </>
            )}
          </InsightCard>
        </View>
      ) : (
        <Card className="bg-deepMarine-100 rounded-lg shadow-card-md p-3 h-52 flex items-center justify-center">
          <Title size="small" textCenter>
            {t('home.insights.emptyState.title')}
          </Title>
          <Paragraph styles="text-center">{t('home.insights.emptyState.description')}</Paragraph>
        </Card>
      )}
    </>
  );
};

export default Insights;
