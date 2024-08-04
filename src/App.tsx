import './App.css'
import Header from './components/header'
import ActiveSectionContextProvider from './contexts/active-section-context'
import ThemeContextProvider from './contexts/theme-context'
import ThemeSwitcher from './components/theme-switcher'
import Home from './homePage'
import Footer from './components/footer'

function App() {
  return (
    <>
    <ThemeContextProvider>
      <div className="bg-[#f8e8f4] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="bg-[#dbdcfd] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ActiveSectionContextProvider>
          <Header />
          <Home />
          <Footer/>
          <ThemeSwitcher />
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    </>
  )
}

export default App
