import './style.scss';
import circleForFreelancers from '../img/circleForFreelancers.svg';
import circleForStudents from '../img/circleForStudents.svg';
import circleForEntrepreneurs from '../img/circleForEntrepreneurs.svg';
import circleForMoms from '../img/circleForMoms.svg';
import freelancer from '../img/freelancer.svg';
import student from '../img/student.svg';
import entrepreneur from '../img/entrepreneur.svg';
import mom from '../img/mom.svg';

function CourseFor() {
    return (
        <div className="courseFor">
            <div className="container">
                <h2 className="title">Для кого мой курс?</h2>
                <div className="circles">
                    <div className="circle" style={{ backgroundImage: `url(${circleForFreelancers})` }}>
                        <div className="people" style={{ backgroundImage: `url(${freelancer})` }}></div>
                    </div>
                    <div className="circle" style={{ backgroundImage: `url(${circleForStudents})` }}>
                        <div className="people" style={{ backgroundImage: `url(${student})` }}></div>
                    </div>
                    <div className="circle" style={{ backgroundImage: `url(${circleForEntrepreneurs})` }}>
                        <div className="people" style={{ backgroundImage: `url(${entrepreneur})` }}></div>
                    </div>
                    <div className="circle" style={{ backgroundImage: `url(${circleForMoms})` }}>
                        <div className="people" style={{ backgroundImage: `url(${mom})` }}></div>
                    </div>
                </div>
                <div className="boxes">
                    <div className="box">
                        <div className="box__title">
                            <h2>Фрилансеры <br />(настоящие и будущие)</h2>
                        </div>
                        <div className="box__in__box">
                            <p className="info">Сммщики, таргетологи, копирайтеры, сторис-мейкеры.</p>
                            <p className="text">Любой навык можно усилить и начать зарабатывать больше с помощью таргетированной рекламы.</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box__title">
                            <h2>Студенты</h2>
                        </div>
                        <div className="box__in__box">
                            <p className="info">Зарабатывать 100$ после четырехлетнего обучения?</p>
                            <p className="text">Ты можешь зарабатывать уже сейчас!</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box__title">
                            <h2>Предприниматели</h2>
                        </div>
                        <div className="box__in__box">
                            <p className="info">Надоели безграмотные специалисты?</p>
                            <p className="text">Обучись таргетированной рекламе и самостоятельно управляй своей рекламой или научись разговаривать с таргетологом на одном языке.</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box__title">
                            <h2>Мамочки</h2>
                        </div>
                        <div className="box__in__box">
                            <p className="info">Маленький ребенок не позволяет тратить много времени на работу?</p>
                            <p className="text">Работая таргетологом ты можешь регулировать свою занятость, взяв 1-2 клиентов и работая, пока ребенок спит.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseFor;