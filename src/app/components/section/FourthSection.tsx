import React from "react";
import MainSection from "../layout/MainSection";

function FourthSection() {
  return (
    <MainSection title="프론트엔드 개발자를 넘어 전문가가 되기 위해">
      <div className="flex flex-col items-center pb-4 gap-4 max-w-[900px] mx-auto">
        <h3 className="text-[1.5rem] md:text-[2rem] mb-3 md:mb-6 text-primary-color">
          어떤 사람이 되야 할까?
        </h3>
        <p className="text-xs md:text-sm text-text-light">
          개발을 하면서 계속 고민해왔다. 단순히 기능을 구현하는 것만으로
          충분할까? 내가 만든 화면이 정말 사용자에게 최적의 경험을 제공하고
          있을까? 개발을 하다 보면 자연스럽게 코드의 완성도를 높이는 데 집중하게
          되지만, 그게 전부는 아니라는 걸 깨닫는 순간들이 있었다. 그래서 나는
          단순한 개발자가 아니라 더 넓은 시야를 가진 전문가가 되고 싶었다.
        </p>
        <p className="text-xs md:text-sm text-text-light">
          그 과정에서 개발 PM으로 일하며 개발뿐만 아니라 기획까지 다양한 경험을
          쌓았다. 예전에는 특정 기능이 동작하지 않으면 단기적인 해결에
          급급했지만, 이제는 그 기능이 비즈니스적으로 어떤 의미를 가지는지,
          사용자가 어떤 흐름으로 서비스를 이용하는지를 고민하게 되었다. 단순히
          요구사항을 구현하는 것이 아니라, 왜 이 기능이 필요한지, 더 나은 방법은
          없는지 스스로 질문하고 제안하는 개발자가 되고 싶었다. 팀 내에서
          기획자, 디자이너, 백엔드 개발자 등 다양한 분야의 사람들과 적극적으로
          소통하며 전체적인 맥락을 이해하려고 노력했다. 단순히 화면을 만드는
          것이 아니라, 사용자 경험을 설계하고 나아가 비즈니스 목표를 달성하는 데
          기여하는 것이 진짜 전문가의 역할이라고 생각한다.
        </p>
        <p className="text-xs md:text-sm text-text-light">
          “인간은 노력하는 한 방황한다.” 괴테의 말이있다. 나는 끊임없이 고민하고
          성장하는 과정 속에 있다. 어떻게 극복할지, 어떻게 하면 더 잘할 수
          있을지, 실수를 줄이기 위해 무엇을 해야 할지를 고민하며 나아가고 있다.
          앞으로도 단순한 프론트엔드 개발자가 아닌, 기술과 비즈니스를 모두
          아우르는 전문가로 성장하고 싶다.
        </p>
      </div>
    </MainSection>
  );
}

export default FourthSection;
