
  import { first } from 'lodash'
  import { startApp, stopApp } from './hooks'
  import { INTselectors } from './selectors'
  const spectronKeys = require("spectron-keys");
  const { Application } = require("spectron");
 
  describe('Presentation Test', () => {
  let app
  before(async () => {
  app =  await startApp()
  })
  after(async () => {
  await stopApp(app)
  })

  it('should Test an Asset while presenting a Demo', async () => {

  //Select Presentation Test Demo
  const PDemo= await app.client.$(INTselectors.PresentationDemo)
  await PDemo.click()
  // Click Present Blue Button
  const PresentBtn= await app.client.$(INTselectors.PresentBtn)
  await PresentBtn.click()
  //Click Present Demo Green Button
  const PresentDemoBtn= await app.client.$(INTselectors.PresentDemoBtn)
  await PresentDemoBtn.click()
  //Opens the Toolbar within an asset
  const Toolbar= await app.client.$(INTselectors.Toolbar)
  await Toolbar.click()
  //Go to Next slide
  const Next= await app.client.$(INTselectors.Next)
  await Next.click()
  //Go back to the previous slide
  const Previous= await app.client.$(INTselectors.Previous)
  await Previous.click()
  //Questions within the toolbar while you're on an asset slide 
  const Question= await app.client.$(INTselectors.Question)
  await Question.click()
  const AddQuestion = await app.client.$(INTselectors.AddQuestion)
  await AddQuestion.setValue('Question #1')
  const Save= await app.client.$(INTselectors.Save)
  await Save.click()
  const EditQuestion = await app.client.$(INTselectors.EditQuestion)
  await EditQuestion.click()
  const EditQ = await app.client.$(INTselectors.EditQ)
  await EditQ.setValue('EDIT')
  const GreenSave= await app.client.$(INTselectors.GreenSave)
  await GreenSave.click()
  const DeleteQuestion= await app.client.$(INTselectors.DeleteQuestion)
  await DeleteQuestion.click()
  const Delete= await app.client.$(INTselectors.Delete)
  await Delete.click()
  const AddQuestionn = await app.client.$(INTselectors.AddQuestion)
  await AddQuestionn.setValue('Question #2')
  const SaveClose= await app.client.$(INTselectors.SaveClose)
  await SaveClose.click()
  //Next steps within the toolbar while you're on an asset slide 
  const NStep= await app.client.$(INTselectors.NStep)
  await NStep.click()
  const AddNextStep = await app.client.$(INTselectors.AddNextStep)
  await AddNextStep.setValue ('Next step #1')
  const Savee= await app.client.$(INTselectors.Save)
  await Savee.click()
  const Assignee = await app.client.$(INTselectors.Assignee)
  await Assignee.click()
  await app.client.keys(spectronKeys.mapAccelerator("J"))
  await app.client.keys(spectronKeys.mapAccelerator("Enter"))
  const DueDate = await app.client.$(INTselectors.DueDate)
  await DueDate.click()
  const Date = await app.client.$(INTselectors.Date)
  await Date.click()
  const EditNextStep = await app.client.$(INTselectors.EditNextStep)
  await EditNextStep.click()
  const EditNS = await app.client.$(INTselectors.EditNS)
  await EditNS.setValue('EDIT')
  const GreenSavee= await app.client.$(INTselectors.GreenSave)
  await GreenSavee.click()
  const DeleteNS= await app.client.$(INTselectors.DeleteNS)
  await DeleteNS.click()
  const Deletee= await app.client.$(INTselectors.Delete)
  await Deletee.click()
  const AddNextStepp = await app.client.$(INTselectors.AddNextStep)
  await AddNextStepp.setValue ('Next step #2')
  const SaveClosee= await app.client.$(INTselectors.SaveClose)
  await SaveClosee.click()
  //Jump to button within the toolbar while you're on an asset slide 
 const JumpTo = await app.client.$(INTselectors.JumpTo)
 await JumpTo.click()
 const Nextt= await app.client.$(INTselectors.Next)
 await Nextt.click()
 const Anotherslide = await app.client.$(INTselectors.Anotherslide)
 await Anotherslide.click()
 // Exit the Demo
 const ExitX= await app.client.$(INTselectors.ExitX)
 await ExitX.click()
  })

it('should Test a Browser while presenting a Demo', async () => {

  const PresentBtn= await app.client.$(INTselectors.PresentBtn)
  await PresentBtn.click()
  // Click Preview Demo 
  const PreviewDemo= await app.client.$(INTselectors.PreviewDemo)
  await PreviewDemo.click()
  //Go to Next slide & Open the Browser toolbar
  const Toolbarr= await app.client.$(INTselectors.Toolbar)
  await Toolbarr.click()
  const Nexttt= await app.client.$(INTselectors.Next)
  await Nexttt.click()
  const Neexttt= await app.client.$(INTselectors.Next)
  await Neexttt.click()
  await app.client.keys(spectronKeys.mapAccelerator("CommandOrControl+T"))
  // Open  Password Manager
 const PasswordManager = await app.client.$(INTselectors.Passwords)
 await PasswordManager.click()
  // Go to www.demoflow.io 
  const URLs = await app.client.$(INTselectors.URLs)
  await URLs.clearValue()
  await URLs.setValue('www.demoflow.io')
  await app.client.keys(spectronKeys.mapAccelerator("Enter"))
  //Zoom in & out 
  const ZoomIn = await app.client.$(INTselectors.ZoomIn)
  await ZoomIn.doubleClick()
  const ZoomOut = await app.client.$(INTselectors.ZoomOut)
  await ZoomOut.doubleClick()
  //Refresh
  const REFBtn = await app.client.$(INTselectors.REFRESH)
  await REFBtn.click()
  //Go Back to Google
  const GoBack = await app.client.$(INTselectors.GoBack)
  await GoBack.click()
  //Window Resize
  const ResizeWindow = await app.client.$(INTselectors.ResizeWindow)
  await ResizeWindow.click()
  //Clear Storage and Reload
  const ClearStorage= await app.client.$(INTselectors.ClearStorage)
  await ClearStorage.click()
  //Go forward to demoflow.io
  const GoForward = await app.client.$(INTselectors.GoForward)
  await GoForward.click()
 // Open DevTools
 const DevTools = await app.client.$(INTselectors.DevTools)
 await DevTools.click()

  })
  })
    