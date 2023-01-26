import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import React from "react";

import { useParams } from "react-router";
import "./Page.css";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {name == "Javascript" ? (
          <React.Fragment>
            <IonCard>
              <img alt="Silhouette of mountains" src="assets/img/var-js.png" />
            </IonCard>
            <IonCard>
              <img alt="Silhouette of mountains" src="assets/img/data-type-js.png" />
            </IonCard>
            <IonCard>
              <img alt="Silhouette of mountains" src="assets/img/date-js.png" />
            </IonCard>
            <IonCard>
              <img alt="Silhouette of mountains" src="assets/img/function-js.png" />
            </IonCard>
            <IonCard>
              <img alt="Silhouette of mountains" src="assets/img/if-else-js.png" />
            </IonCard>
            <IonCard>
              <img alt="Silhouette of mountains" src="assets/img/string-js.png" />
            </IonCard>
            <IonCard>
              <img alt="Silhouette of mountains" src="assets/img/example-of-js.png" />
            </IonCard>
          </React.Fragment>
        ) : (
          <React.Fragment></React.Fragment>
        )}

         {name == "SQL" ? (
          <React.Fragment>
            <IonCard>
              <img alt="Silhouette of mountains" src="assets/img/var-js.png" />
            </IonCard>
            <IonCard>
              <img alt="Silhouette of mountains" src="assets/img/var-js.png" />
            </IonCard>
            <IonCard>
              <img alt="Silhouette of mountains" src="assets/img/var-js.png" />
            </IonCard>
          </React.Fragment>
        ) : (
          <React.Fragment></React.Fragment>
        )}
         {name == "PYTHON" ? (
          <React.Fragment>
            <IonCard>
              <img alt="Silhouette of mountains" src="assets/img/data-type-python.png" />
            </IonCard>
            <IonCard>
              <img alt="Silhouette of mountains" src="assets/img/deffunc-python.png" />
            </IonCard>
            <IonCard>
              <img alt="Silhouette of mountains" src="assets/img/function-python.png" />
            </IonCard>
            <IonCard>
              <img alt="Silhouette of mountains" src="assets/img/var-python.png" />
            </IonCard>
            <IonCard>
              <img alt="Silhouette of mountains" src="assets/img/example-python.png" />
            </IonCard>
            <IonCard>
              <img alt="Silhouette of mountains" src="assets/img/loop-python.png" />
            </IonCard>
            <IonCard>
              <img alt="Silhouette of mountains" src="assets/img/operator-python.png" />
            </IonCard>
          </React.Fragment>
        ) : (
          <React.Fragment></React.Fragment>
        )}
         {name == "CSS" ? (
          <React.Fragment>
            <IonCard>
              <img alt="Silhouette of mountains" src="assets/img/CSS.png" />
            </IonCard>
            <IonCard>
              <img alt="Silhouette of mountains" src="assets/img/var-js.png" />
            </IonCard>
            <IonCard>
              <img alt="Silhouette of mountains" src="assets/img/var-js.png" />
            </IonCard>
            <IonCard>
              <img alt="Silhouette of mountains" src="assets/img/example-of-css.png" />
            </IonCard>
          </React.Fragment>
        ) : (
          <React.Fragment></React.Fragment>
        )}

        {name == "HTML" ? (
          <React.Fragment>
            <IonCard>
              <img
                alt="Silhouette of mountains"
                src="assets/img/div-spam-html.png"
              />
            </IonCard>
            <IonCard>
              <img alt="Silhouette of mountains" src="assets/img/basic-tags-html.png" />
            </IonCard>
            <IonCard>
              <img alt="Silhouette of mountains" src="assets/img/elements-html.png" />
            </IonCard>
            <IonCard>
              <img alt="Silhouette of mountains" src="assets/img/formatting-html.png" />
            </IonCard>
            <IonCard>
              <img alt="Silhouette of mountains" src="assets/img/lists-html.png" />
            </IonCard>
            <IonCard>
              <img alt="Silhouette of mountains" src="assets/img/style-html.png" />
            </IonCard>
            <IonCard>
              <img alt="Silhouette of mountains" src="assets/img/text-tags-html.png" />
            </IonCard>
            <IonCard>
              <img alt="Silhouette of mountains" src="assets/img/example-of-html.png" />
            </IonCard>
           
           
            
          </React.Fragment>
        ) : (
          <React.Fragment></React.Fragment>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Page;
