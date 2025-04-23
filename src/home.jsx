import "./home.scss";
import logo from "./assets/logo1.png";
import { RiTwitterXFill } from "react-icons/ri";

export const App = () => {
  return (
    <div className="page">
      <figure className="logo">
        <img src={logo} alt="Logo" />
        <h1>Bitlow.AI</h1>
      </figure>
      <section className="intro">
        <h1>WHAT IS THIS?</h1>
        <p className="quote">
          We believe that the future of intelligence should not be bottlenecked
          by access. Most organizations are priced out of <u>high-quality</u>{" "}
          inference not because they lack ambition, but because they lack
          leverage. We exist to fix that.
        </p>
        <p>
          We aggregate underutilized compute into a stable, developer-first
          infrastructure layer — a quiet backbone for those who prefer building
          over burning budget.
        </p>
        <p>
          You shouldn’t need a venture round to train a model, or ship something
          smart. You just need the right access point.
        </p>
        <p>
          We're not here to advertise miracles. We're here to quietly unlock
          them.
        </p>
        <p className="quote">
          We believe AI infrastructure should be invisible, affordable, and
          inevitable.
        </p>
        <b>
          You can reach us at <u>support@yourdomain.com</u>. If your team is
          spending $10K/month on inference, there’s a reason you're reading
          this.
        </b>

        <table className="pricing-table">
          <thead>
            <tr>
              <th>MODEL</th>
              <th>PRICE</th>
              <th>LIMIT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>aesthetic-m0</td>
              <td>$0.00 / 1k tokens</td>
              <td>100 TPS</td>
            </tr>
            <tr>
              <td>aesthetic-m1</td>
              <td>$0.11 / 1k tokens</td>
              <td>100 TPS</td>
            </tr>
            <tr>
              <td>aesthetic-chat</td>
              <td>$0.14 / 1k tokens</td>
              <td>200 TPS</td>
            </tr>
            <tr>
              <td>aesthetic-m2</td>
              <td>$0.20 / 1k tokens</td>
              <td>200 TPS</td>
            </tr>
            <tr>
              <td>aesthetic-m3</td>
              <td>$0.25 / 1k tokens</td>
              <td>200 TPS</td>
            </tr>
          </tbody>
        </table>

        <div className="buttons">
          <button className="btn">VIEW DOCS</button>
          <button className="btn">START NOW</button>
        </div>
      </section>
      <section className="features">
        <h2>KEY IDEAS</h2>
        <ul>
          <li>1. Under 100ms response times.</li>
          <li>2. Zero cold starts.</li>
          <li>3. No waste, full compute usage.</li>
        </ul>
      </section>
      <section className="how">
        <h2>HOW IT WORKS</h2>
        <p>
          Compute capacity is often underutilized. But it comes in awkward
          forms: a few minutes here, an idle hour there. Like electricity, it
          cannot be stored. We act as a real-time exchange for this otherwise
          wasted compute.
        </p>
        <p>
          Our custom orchestration software aggregates these micro-resources
          from global data centers and runs AI workloads efficiently. Acting as
          the buyer of last resort, we unlock dramatic discounts and pass them
          directly to you.
        </p>
      </section>
      <section className="why">
        <h2>WHY</h2>
        <p>
          As LLMs become core infrastructure, lamma-like compute becomes the new
          commodity. Like oil markets evolved into futures exchanges, we’re
          building the next-gen spot market for AI processing.
        </p>
        <p>
          Our goal? A liquid, fair, and efficient market that allows data
          centers to compete to serve developers. A transparent marketplace that
          makes intelligence accessible.
        </p>
        <p>
          We believe this will accelerate the growth of AI across every domain —
          and expand what’s possible for humanity.
        </p>
      </section>
      <button className="contact-btn">
        Contact Us <RiTwitterXFill />
      </button>
      <footer className="footer">
        <p>© 2024 — CONTACT — DOCS</p>
      </footer>
    </div>
  );
};
