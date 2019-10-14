import React from "react";
import PageContainer from '../PageContainer/PageContainer';
import { Header } from "../Header/Header";

export class MainLayout extends React.Component {
  render() {
    return (
      <div className="container">
        <PageContainer>
          <Header />
          {this.props.children}
          </PageContainer>
        
      </div>
    );
  }
}