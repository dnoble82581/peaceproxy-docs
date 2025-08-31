import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    imgSrc: 'img/ease-of-use.png',
    description: (
      <>
          Peace Proxy provides an intuitive, user-friendly interface that enables law enforcement teams to efficiently manage high-stakes incidents with minimal training.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imgSrc: 'img/what-matters.png',
    description: (
      <>
          Peace Proxy streamlines communication and documentation, enabling teams to focus on critical decision-making and resolving incidents effectively without distractions.
      </>
    ),
  },
  {
    title: 'Powered by Laravel',
    imgSrc: 'img/powered-by.png',
    description: (
      <>
          Peace Proxy is built on the robust Laravel framework, ensuring a secure, scalable, and efficient foundation for managing high-stakes operations.
      </>
    ),
  },
];

function Feature({imgSrc, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={imgSrc} role="img" alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
