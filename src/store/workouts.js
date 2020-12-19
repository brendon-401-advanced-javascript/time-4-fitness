const initialState = {
    pushups: [ 'Pushups',
     'Place your hands on the floor so they’re slightly outside shoulder-width. Spread your fingers slightly out and have them pointed forward. Raise up onto your toes so that all of your body weight is on your hands and your feet. Contract your abdominals to keep your torso in a straight line and prevent arching your back or pointing your bottom in the air. Bend your elbows and lower your chest down toward the floor. Once your elbows bend slightly beyond 90 degrees, push off the floor and extend them so that you return to starting position.', 
     '', 
     ''],
    pullups: [ 'Pullups',
     'Standard dead-hang pull up is grasped with an overhand/underhand/alternative-hand grip. Then the body is pulled up until the chin clears the bar, and finished by lowering the body until arms and shoulders are fully extended. Stricter standards would only consider a full repetition to be one in which the elbows pass behind the coronal plane.',
     '',
     ''],
    squats: [ 'Squats', 
     'Stand with your feet shoulder-width apart, resting your arms straight down at your sides Bracing your core and keeping a proud chest, begin to push your hips back, bending your knees as if you’re going to sit down Ensure that your knees do not cave in When your thighs are parallel to the floor, pause. Push up evenly through your whole foot back to the starting position ', 
     '', 
     ''],
    lunges: [ 'Lunges', 
     'Stand tall with feet hip-width apart. Engage your core.Take a big step forward with right leg. Start to shift your weight forward so heel hits the floor first. Lower your body until right thigh is parallel to the floor and right shin is vertical. It’s OK if knee shifts forward a little as long as it doesn’t go past right toe. If mobility allows, lightly tap left knee to the floor while keeping weight in right heel. Press into right heel to drive back up to starting position.Repeat on the other side.', 
     '', 
     ''],

  };
  
  const workoutsReducer = (state=initialState, action) => {
    const {type, payload} = action;
  
    switch(type) {
        case "products.INITIALIZE": 
            return payload;
        default: 
            return state; 
    };
  };


  
  export default workoutsReducer;

 
