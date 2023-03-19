import {useRouter} from 'next/router';

function SelectedClientProjectPage() {
  console.log(useRouter().query);
  
  return (
    <div>
      <h1>The Project Page for the Specific Project for a Selected Client</h1>
    </div>
  );
}

export default SelectedClientProjectPage;