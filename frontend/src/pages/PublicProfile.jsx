import React, { useEffect } from "react";
import Layout from "./Layout";
import Modal from "../components/Modal";
export default function PublicProfile({id}) {
  const [publicProfile, setPublicProfile] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    
  })
  return (
    <Layout>
      <Modal>PublicProfile</Modal>
    </Layout>
  );
}
