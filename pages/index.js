
import Layout from "../Component/Layout"
import Hero from "../Component/Hero"
import Produk from "../Component/Produk"
import Keunggulan from "../Component/Keunggulan"
import Testimoni from "../Component/Testimoni"

export default function Home() {
  return (
    <div>
   <Layout>
      <Hero/>
      <Keunggulan/>
      <Produk/>
      <Testimoni/>
   </Layout>
    
    </div>
  )
}
