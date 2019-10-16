import React from "react";
import PageContainer from '../PageContainer/PageContainer';
import { Header } from "../Header/Header";
import './MainLayout.scss'

export class MainLayout extends React.Component {
  render() {
    return (
      <div className="container">
        <PageContainer>
          <Header />
          <div className="main-box">
            {this.props.children}
          </div>
        </PageContainer>
      </div>
    );
  }
}