const skillMetadata=require('../model/User/userSkillMetadata');
exports.addDetails=async(req,res)=>{
    try {
        const { username,offering, wanted, availability } = req.body;
        if (
            (!username||!offering || !offering.skills || offering.skills.length === 0) ||
            (!wanted || !wanted.skills || wanted.skills.length === 0) ||
            !availability
        ) {
            return res.status(400).
            json({
                success:false,
                message:'All fields are required' 
                });
        }

        const addSkills = new skillMetadata({
            username,
            offering,
            wanted,
            availability
        });

        await addSkills.save();

        res.status(201).json({      
             success:true,
             data:addSkills,
             message: 'Skill metadata added successfully',
            });
    }
    catch(err)
    {
        console.error(err   );
        res.status(500).
        json({
             success:false,
             message:'Internal server error',
             error:err,
            });
    
    }
}