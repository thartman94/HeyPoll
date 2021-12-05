import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import Poll from "../../components/Poll";

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  return {
    props: { id },
  };
};

function profile({ id }) {
  return (
    <section className="profile">
      <Header className="relative" title="User Profile" />
      <div className="profile__body">
        <Sidebar id={id} />
        <div className="poll-wrapper">
          <Poll />
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default profile;
