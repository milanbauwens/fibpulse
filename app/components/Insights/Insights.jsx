import { useQuery } from '@tanstack/react-query';
import { View } from 'react-native';

import {
  getHighestAmountOfActivities,
  getHighestAmountOfSymptoms,
} from '../../core/db/modules/episodes/api';
import { useTranslations } from '../../core/i18n/LocaleProvider';
import { getMostCommonActivity } from '../../core/utils/episode/getMostCommonActivity';
import {
  getMostCommonSymptom
} from '../../core/utils/episode/getMostCommonSymptom';
import InsightCard from '../InsightCard/InsightCard';
import EmptyStateCard from '../common/EmptyStateCard/EmptyStateCard';
import { Paragraph } from '../common/Typography';

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
    !activityLoading && activities.data.length > 0 && getMostCommonActivity(activities.data);
  const symptom =
    !symptomsLoading && symptoms.data.length > 0 && getMostCommonSymptom(symptoms.data);

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
        <EmptyStateCard
          icon="search"
          description={t('home.insights.emptyState.description')}
          title={t('home.insights.emptyState.title')}
        />
      )}
    </>
  );
};

export default Insights;
