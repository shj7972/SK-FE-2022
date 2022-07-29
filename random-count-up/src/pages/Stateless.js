import { A11yHidden, Banner } from 'components';
import { ErrorBoundary } from 'components';

function StatelessComponent(props) {
  return (
    <ErrorBoundary>
      <div lang="en" style={{ padding: '40px 60px', fontSize: '1.2rem' }}>
        <A11yHidden
          as="a"
          href="#a11y-hidden"
          className="positionFixed"
          style={{ fontSize: '4rem' }}
          focusable
        >
          Go to A11Y Hidden Component
        </A11yHidden>
        <A11yHidden as="h2"> stateless function component </A11yHidden>
        <a href="https://reactjs.org">Learn React</a>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cum
          similique molestiae deserunt doloribus veniam, voluptatum at
          dignissimos repudiandae architecto consequuntur eligendi quibusdam,
          ducimus corporis ipsam animi necessitatibus, quod quis.
        </p>
        <div style={{ display: 'flex', gap: 10 }}>
          <Banner
            url="cover.jpg"
            width={374}
            height={800}
            style={{ border: '20px solid #f5e74f' }}
          >
            선한 영향력 = 플라스틱으로부터 바다를 지키는 능력 우리 모두를
            생각하는 '선한 영향력'이 더 큰 영향력이 되도록 SK도 노력하겠습니다.
            모두가 함께, 행복하도록 OK! SK
          </Banner>
          <Banner
            url="cover2.jpg"
            width={400}
            height={800}
            style={{ border: '20px solid #3838d4' }}
          >
            세상.행복하길 지구가 더 깨끗해지길 사회는 함께 더 따뜻해지길 기업은
            신뢰와 공감을 통해 더 든든해지길 SK가 ESG로 만들어가는 길 지구도
            사회도 기업도 지속 가능한 행복으로 가는 길입니다 ESG로
            세상.행복하도록
          </Banner>
        </div>
        <p>
          Nam officia quis quod, consequatur accusamus earum temporibus quidem
          saepe possimus sunt error laboriosam nesciunt alias laborum doloribus
          est sapiente eveniet rerum asperiores, magnam ratione? Deserunt
          doloremque qui quam velit!
        </p>
        <A11yHidden as="h3" id="a11y-hidden">
          <abbr title="Accessibility">A11Y</abbr> Hidden Component
        </A11yHidden>
        <p>
          Dolorem accusamus aperiam molestias architecto obcaecati earum neque
          ducimus dolore hic, esse ut recusandae fugit quod enim, quae rem sint
          ipsam <a href="#link-a">amet</a>. At adipisci atque aliquam similique,
          expedita nulla in.
        </p>
        <p>
          Minima optio, natus distinctio odit, deleniti assumenda fugit id non
          temporibus earum dicta asperiores commodi. Aspernatur consequuntur
          quas at, <a href="#link-z">accusamus in enim sunt tenetur</a> voluptas
          earum facilis dolores nobis amet.
        </p>
        <p>
          Numquam natus voluptate saepe est omnis rem quidem dicta explicabo
          nobis quisquam id magnam rerum eius, expedita recusandae minima
          asperiores laboriosam adipisci totam fugiat minus. Facilis, maxime
          blanditiis! Corrupti, fugiat?
        </p>
      </div>
    </ErrorBoundary>
  );
}

export default StatelessComponent;
