import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import {logoJavascript,logoHtml5,logoCss3,logoPython ,fileTrayStackedOutline,archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Javascript',
    url: '/page/Javascript',
    iosIcon: logoJavascript,
    mdIcon: logoJavascript
  },
  {
    title: 'HTML',
    url: '/page/HTML',
    iosIcon: logoHtml5,
    mdIcon: logoHtml5
  },
  {
    title: 'CSS',
    url: '/page/CSS',
    iosIcon: logoCss3,
    mdIcon: logoCss3
  },
  {
    title: 'PYTHON',
    url: '/page/PYTHON',
    iosIcon: logoPython,
    mdIcon: logoPython
  },
  {
    title: 'SQL',
    url: '/page/SQL',
    iosIcon: fileTrayStackedOutline,
    mdIcon: fileTrayStackedOutline
  },
  
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Cheat-Sheat</IonListHeader>
          <IonNote></IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
