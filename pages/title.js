import { Provider } from '../components/layouts';
import { TitlePage } from '../components/templates';

const titleExtended = {
  team: 'Onibaku',
  name: 'Ajin',
  subname: 'Получеловек',
  description:
    'Новая жизнь Китахары Ёри начинается с момента поступления в колледж, который находится на берегу океана в городе Идзу. В предвкушении новых эмоций парень отправляется в дазин своего дяди «Необъятный океан». Здесь его ждет красивый океан, прекрасные женщины и мужчины, что любят дайвинг и алкоголь. Сможет ли Ёри прожить студенческую жизнь своей мечты?',
  img: '/title-1.png',
  bg: '/title-bg-1.png',
  type: 'Manga',
  'release-date': '2012',
  status: 'Finished',
  author: 'SAKURAI Gamon',
  artist: 'SAKURAI Gamon',
  chapters: '86',
};

const chapters = [
  { sequence: '1', name: 'DADADADA' },
  { sequence: '2', name: 'DADADADA' },
  { sequence: '2', name: 'DADADADA' },
  { sequence: '2', name: 'DADADADA' },
];

export default function Title() {
  return (
    <Provider>
      <TitlePage title={titleExtended} chapters={chapters} />
    </Provider>
  );
}
