import React, { useState , useEffect} from "react";
import AsyncStorage  from '@react-native-async-storage/async-storage'
import {
  
  Modal,
  Button,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View,

 
  ScrollView,
  ImageBackground

  

} from "react-native";
import Slider from '@react-native-community/slider';


function Blackjack(){
    const data= ['0',
    '1',require('./assets/2.jpg'),require('./assets/3.jpg'),require('./assets/4.jpg'),require('./assets/5.jpg'),require('./assets/6.jpg'),
    require('./assets/7.jpg'),require('./assets/8.jpg'),require('./assets/9.jpg'),require('./assets/10.jpg'),require('./assets/ace.jpg'),require('./assets/back.jpg'),require('./assets/jack.jpg'),        
    require('./assets/queen.jpg'),require('./assets/king.jpg')
   
]
      const pics=[require('./assets/wp2180134.jpg'),require('./assets/wp2180253.jpg').toString(),
      require('./assets/wp2180136.jpg').toString(),require('./assets/wp2180140.jpg').toString(),require('./assets/wp2180151.jpg').toString(),require('./assets/wp2180171.jpg')]
        const alph=[2,3,4,5,6,7,8,9,10,11,13,14,15]
    
        function randompic(){
           return(alph[Math.floor(Math.random()*alph.length)]
           )}
           
           function randomdealer(){
             if (dcounterflag==0) {
              setdcounterflag(dcounterflag+1)
             
           setdrandom(alph[Math.floor(Math.random()*alph.length)]
           
            )}}
           
         function modal1(){
           setmodal(1)
         }
        const save = async()=>{
         try{ 
        await AsyncStorage.setItem('bank',String(bank))
        await AsyncStorage.setItem('background',String(backGround))
         }catch(err){

         }
        }   
        
      const  load = async() =>{
        const load=await AsyncStorage.getItem('bank')
        const loadding=await AsyncStorage.getItem('background')
        setbackGround(loadding)
        setbankdata(Number(load))
        setbank(Number(load))
      }
      function money(){
        if (bank<=30) {
          setbank(bank+50)
        }
        
      }
  
    const [stopflag, setstopflag] = useState(false);
    const [playersum, setplayersum] = useState();
    const [modal, setmodal] = useState(0);
    const [condition, setcondition] = useState(0);//sum flag 
    const [sum, setsum] = useState(0);
    const [dsum, setdsum] = useState(0);
    const [random, setrandom] = useState(randompic);
    const [drandom, setdrandom] = useState();
    const [status, setstatus] = useState();
    const [counter, setcounter] = useState(0);
    const [dcounter, setdcounter] = useState(0);
    const [dcounterflag, setdcounterflag] = useState(0);
    const [betSize, setbetSize] = useState(1);
    const [bank, setbank] = useState(bankdata);
    const [bankdata, setbankdata] = useState();
    const [betconfirm, setbetconfirm] = useState(false);
    const [pic1, setpic1] = useState();
    const [pic2, setpic2] = useState();
    const [pic3, setpic3] = useState();
    const [pic4, setpic4] = useState();
    const [pic5, setpic5] = useState();
    const [pic6, setpic6] = useState();
    const [pic7, setpic7] = useState();
    const [pic8, setpic8] = useState();
    const [pic9, setpic9] = useState();
    const [pic10, setpic10] = useState();
    const [pic11, setpic11] = useState();
    const [dpic0, setdpic0] = useState();
    const [dpic1, setdpic1] = useState();
    const [dpic2, setdpic2] = useState();
    const [dpic3, setdpic3] = useState();
    const [dpic4, setdpic4] = useState();
    const [dpic5, setdpic5] = useState();
    const [dpic6, setdpic6] = useState();
    const [dpic7, setdpic7] = useState();
    const [dpic8, setdpic8] = useState();
    const [dpic9, setdpic9] = useState();
    const [maduser, setmaduser] = useState(false);
    const [loop, setloop] = useState(0);
    const [backGround, setbackGround] = useState();
    const [setFlag, setsetFlag] = useState(false);
   

    
   

   useEffect(() => {
    
      if (random==null) {
        setcondition(0)
        randompic()
      }
      if (condition==1&&random==13) {
        setsum(random+sum-3)
        setcondition(0)
      }
      if (condition==1&&random==14) {
        setsum(random+sum-4)
        setcondition(0)
      }
      if (condition==1&&random==15) {
        setsum(random+sum-5)
        setcondition(0)
      }
       if (condition==1&&random!=13&&random!=14&&random!=15) {
           setsum(random+sum)
           setcondition(0)
       }
      if (counter==1&&dcounterflag==1) {
        setdpic0(drandom)
      }
       if (counter==1) {
        setpic1(random)
       
      }
    if (counter==2) {
      setpic2(random)
    }
    if (counter==3) {
      setpic3(random)
    }
    if (counter==4) {
      setpic4(random)
    }
    if (counter==5) {
      setpic5(random)
    }
    if (counter==6) {
      setpic6(random)
    }
    if (counter==7) {
      setpic7(random)
    }
    if (counter==8) {
      setpic8(random)
    }
    if (counter==9) {
      setpic9(random)
    }
    if (counter==10) {
      setpic10(random)
    }
    if (counter==11) {
      setpic11(random)
    }
   
    if (dcounter==1) {
      setdpic1(drandom)
    }
    if (dcounter==2) {
      setdpic2(drandom)
    }
    if (dcounter==3) {
      setdpic3(drandom)
    }
    if (dcounter==4) {
      setdpic4(drandom)
    }
    if (dcounter==5) {
      setdpic5(drandom)
    }
    if (dcounter==6) {
      setdpic6(drandom)
    }
    if (dcounter==7) {
      setdpic7(drandom)
    }
    if (dcounter==8) {
      setdpic8(drandom)
    }
    if (dcounter==9) {
      setdpic9(drandom)
    }
    if (dcounter==10) {
      setdpic10(drandom)
    }
    
     if (sum>21&&pic1==11&&pic2==11) {
      setstatus('u won!')
      
 
      
     }
    
    if (sum==21) {
      setmaduser(true)
      setstatus('u won!')
     
     }
    
     if(sum>21&&pic1!=11&&pic2!=11)
     setstatus('u lost!')
     if (status=='u lost!') {
      setTimeout(lost, 1200)
      setTimeout(resetmodal, 2800)
     setdcounterflag(0)
     
   
     }
     if (status=='u won!') {
      setTimeout(win,1200)
      setTimeout(resetmodal, 2800)
     setdcounterflag(0)
      }
    
function lost() {
 
modal1()
  setcounter(0)
  setsum(0)
setstatus('')
setdcounter(0)
setdsum(0)
setdrandom(0)
setbank(bank-betSize)
save()
setbetconfirm(false)
   setstopflag(false)
    
 }
 function win() {
 
  setmodal(2)
   setcounter(0)
   setsum(0)
 setstatus('')
 setdcounter(0)
 setdsum(0)
 setdrandom(0)
 setbank(bank+betSize)
 setmaduser(false)
save()
 setbetconfirm(false)
    setstopflag(false)
  }
  function resetmodal(){
    return(
      setmodal(0)
    )
  }
     if (stopflag==true) {
       setplayersum(sum)
     }
     //dealer part
    if (dcounterflag==1&&drandom!=13&&drandom!=14&&drandom!=15) {
      
    
        setdsum(dsum+drandom)
    
        setdcounterflag(dcounterflag+1)
     
       
      }
      if (dcounterflag==1&&drandom==13) {
      
    
        setdsum(dsum+drandom-3)
    setdrandom(drandom-3)
        setdcounterflag(dcounterflag+1)
     
       
      }
      if (dcounterflag==1&&drandom==14) {
      
    
        setdsum(dsum+drandom-4)
    setdrandom(drandom-4)
        setdcounterflag(dcounterflag+1)
     
       
      }
      if (dcounterflag==1&&drandom==15) {
      
    
        setdsum(dsum+drandom-5)
    setdrandom(drandom-5)
        setdcounterflag(dcounterflag+1)
     
       
      }
     if (bank<0) {
       setbank(0)
     }
   
       
    if(loop==1) {
      setTimeout(()=>{
        
        if (dsum+temp< 17) {
          setloop(1)
        }
  
  if (dsum+temp>= 17) {
    if (playersum>dsum+temp) {
      setstatus('u won!')
  
       
     }
     if (playersum<(dsum+temp)&&temp+dsum==19) {
      setstatus('u lost!')
  
       
     }
     if (playersum<(dsum+temp)&&temp+dsum==18) {
      setstatus('u lost!')
  
       
     }
     if (playersum<(dsum+temp)&&temp+dsum==17) {
      setstatus('u lost!')
  
       
     }
     if (playersum<(dsum+temp)&&temp+dsum==20) {
      setstatus('u lost!')
  
       
     }
     if (dsum+temp>=22) {
       setstatus('u won!')
     }
     if (dsum+temp==21) {
      setstatus('u lost!')
    }
    if (playersum==dsum+temp) {
      setstatus('u lost!')
    }
   
    
    setloop(0)
    
    setstopflag(false)}}, 1000)
      const temp=randompic()
      if (temp==13) {   //added
        //setdrandom(temp-3)//added
        setdsum(dsum+temp-3)//added
      }
      if (temp==14) {   //added
        //setdrandom(temp-3)//added
        setdsum(dsum+temp-4)}//added
     if (temp==15) {
      setdsum(dsum+temp-5)//added
     }
      if(temp!=13&&temp!=14&&temp!=15){
      setdrandom(temp)
      setdcounter(dcounter+1)
      setdsum(dsum+temp)
      }
     
       
      setloop(2)
     }
  

           
              
          
        
       return () => {

          
       }
   }, [condition,sum,random,status,modal,loop,stopflag,drandom,dsum,dcounterflag,dcounter])
   useEffect(() => {
     load()
  
     return () => {
     
     }
   }, [])

   return(




<ImageBackground source={(pics[backGround])} style={{ 
    position:'absolute',marginTop:20,paddingVertical:10}}>
        <View style={{paddingHorizontal:5}}>
       
        <View style={{alignItems:'flex-end',paddingRight:20,paddingTop:20}}>
        
       <Text style={{fontSize:35,fontWeight:'bold',color:'green',alignItems:'flex-end',paddingRight:20}}
        >{bank}$</Text>
</View>
            <View style={{flexDirection:'row',paddingTop:10,marginBottom:3}}>
            <View style={{marginTop:40}}>
<Text style={{fontSize:15,fontWeight:'bold',color:'#F98E05'}}>Dealer</Text>
</View>

             <Image 
             style={styles.modal}
            source={(data[12])}/>
            {counter>0?(
             <Image 
             style={styles.modal}
            source={(data[dpic0])}/>):null}
               {dcounter>0?(
             <Image 
             style={styles.modal}
            source={(data[dpic1])}/>):null}
               {dcounter>1?(
             <Image 
             style={styles.modal}
            source={(data[dpic2])}/>):null}
             {dcounter>2?(
             <Image 
             style={styles.modal}
            source={(data[dpic3])}/>):null}
             {dcounter>3?(
             <Image 
             style={styles.modal}
            source={(data[dpic4])}/>):null}
             {dcounter>4?(
             <Image 
             style={styles.modal}
            source={(data[dpic5])}/>):null}
             {dcounter>5?(
             <Image 
             style={styles.modal}
            source={(data[dpic6])}/>):null}
             {dcounter>6?(
             <Image 
             style={styles.modal}
            source={(data[dpic7])}/>):null}
             {dcounter>7?(
             <Image 
             style={styles.modal}
            source={(data[dpic8])}/>):null}
             {dcounter>8?(
             <Image 
             style={styles.modal}
            source={(data[dpic9])}/>):null}


            </View>
            

            <View style={styles.images}>  
            <View style={{marginTop:40}}>
            <Text  style = {{fontSize:15,fontWeight:'bold',color:'#F98E05'}}>  You   </Text> 
            </View>  
            <Image 
             style={styles.modal}
            source={(data[12])}/>
          
           {counter>0?(
               <Image 
             style={styles.modal}           
            source={(data[pic1])}/>):null}
            
              {counter>1?(
             <Image style={styles.modal}                      
            source={(data[pic2])}
             />):null}
             {counter>2?(
             <Image 
             style={styles.modal}           
            source={(data[pic3])}/>):null}
             {counter>3?(
             <Image 
             style={styles.modal}           
            source={(data[pic4])}/>):null}
             {counter>4?(
             <Image 
             style={styles.modal}           
            source={(data[pic5])}/>):null}
             {counter>5?(
             <Image 
             style={styles.modal}           
            source={(data[pic6])}/>):null}
             {counter>6?(
             <Image 
             style={styles.modal}           
            source={(data[pic7])}/>):null}
             {counter>7?(
             <Image 
             style={styles.modal}           
            source={(data[pic8])}/>):null}
             {counter>8?(
             <Image 
             style={styles.modal}           
            source={(data[pic9])}/>):null}
             {counter>9?(
               
             <Image 
             style={styles.modal}           
            source={(data[pic10])}/>):null}
             {counter>10?(
             <Image 
             style={styles.modal}           
            source={(data[pic11])}/>):null}
            
          </View  >  
          
        <View style={{marginBottom:5}}>
           {stopflag==false&&betconfirm==true&&maduser==false?(
         
                <Button title ='Hit' onPress={()=>{randompic(),setrandom(randompic),setcondition(1),setcounter(counter+1),randomdealer(),setdcounterflag(dcounterflag+1)}} />
    ):null}
              {stopflag==false&&betconfirm==true?(
               <Button title='stop' onPress={()=>{setstopflag(true),setloop(1)}} />
               ):null}
          
          </View>
        
          {betconfirm==false?(
          
               <Slider style={{marginBottom:5}}
                maximumValue={bank}
              minimumValue={1}
               value={betSize} 
               step={1}
              onValueChange={(betSize)=>setbetSize(betSize)}
              />
          ):null}
          <View style={{marginBottom:5}}>
          {betconfirm==false?(
             <Button  title='submit bet' onPress={()=>{setbetconfirm(true)}}/>
             ):null}
             <View style={{flex:1,marginTop:20}}>
            <Button title='money' onPress={()=>{setsetFlag(true)}}/>
            <Button title='save' onPress={()=>{save()}}/>
            <View style={{alignItems:'center'}}>
            <Text style={{fontSize:25,fontWeight:'bold',color:'#F98E05'}}>
YOU: {sum} 
  
                </Text>
                <Text style={{fontSize:25,fontWeight:'bold',color:'#F98E05'}}>

   DEALER: {dsum}
                </Text>
                <Text style={{fontSize:25,fontWeight:'bold',color:'#F9052E'}}>

BET: {betSize}
             </Text>
                 </View>
            </View>
             </View>
             
         
              
          <Modal
          animationType='slide'
          visible={modal==1}>
<View style={{justifyContent:'center',alignItems:'center' }}>
<Text style={{fontSize:25,fontWeight:'bold',color:'#F98E05'}}>u lost!</Text>
</View>

          </Modal>
          <Modal
          animationType='slide'
          visible={modal==2}>
<View style={{justifyContent:'center',alignItems:'center' }}>
<Text  style={{fontSize:25,fontWeight:'bold',color:'#F98E05'}}>u won!</Text>
</View>

          </Modal >
             <Modal  animationType='slide'
              visible={setFlag==true}
              
             >
<View style={{justifyContent:"center",alignItems:'center'}}>
  
  <View style={{flexDirection:'row'}}>
  <Image   style={styles.modal3}           
            source={(pics[1])}/>
            <Text style={{paddingTop:30}}>free</Text>
            </View>
            {bank>0?( 
  <Button title='0$:choose' onPress={()=>{setbackGround(1)}}/>
  ):null}
  
  <View style={{flexDirection:'row'}}>
  <Image  style={styles.modal3}           
            source={(pics[2])}/>
             <Text style={{paddingTop:30}}>100$</Text>
             </View>
             {bank>100?(  
  <Button title='100:choose' onPress={()=>{setbackGround(2)}}/>
  ):null}
  <View style={{flexDirection:'row'}}>
  <Image  style={styles.modal3}           
            source={(pics[3])}/>
             <Text style={{paddingTop:30}}>250$</Text>
             </View>
             {bank>200?( 
  <Button title='200:choose' onPress={()=>{setbackGround(3)}}/>
  ):null}
  <View style={{flexDirection:'row'}}>
  <Image  style={styles.modal3}           
            source={(pics[5])}/>
             <Text style={{paddingTop:30}}>300$</Text>
             </View>
             {bank>300?( 
  <Button title='300:choose' onPress={()=>{setbackGround(5)}}/>
  ):null}
  <View style={{flexDirection:'row'}}>
  <Image  style={styles.modal3}           
            source={(pics[4])}/>
             <Text style={{paddingTop:30}}>500$</Text>
             </View>
             {bank>500?( 
  <Button title='500:choose' onPress={()=>{setbackGround(4)}}/>
  ):null}
  <Button title='free 50 $' onPress={()=>money()}/>
  <Text>giving u  50$ more if your money is under 30$</Text>
 
  <Button title='back' onPress={()=>setsetFlag(false)}/>
</View>
             </Modal>
             <View>
    
             <Text>hit cards,the player who reach 21 is winner for changing background picture select money button(it works when   your money fall below 30$)</Text>
    
           </View>


           
      
            <View style={{justifyContent:'center',alignItems:'center'}}>
         
            </View>
          
            </View>
            </ImageBackground>
           
    )
}
export default Blackjack
const styles=StyleSheet.create({
    modal:
    
    {justifyContent:'center',alignItems:'center',height:70,width:50,marginHorizontal:2}
,butt:{marginVertical:20,marginHorizontal:50,width:50,height:50,flexDirection:'column',justifyContent:'center',alignItems:'center'},
modal2:{  justifyContent:'center',alignItems:'center',height:100,width:100},
images:{flexDirection:'row'},
image:{flex:1,
  resizeMode: "cover",
  justifyContent: "center"}
  ,modal3:{  justifyContent:'center',alignItems:'center',height:60,width:40},
})
//style.width