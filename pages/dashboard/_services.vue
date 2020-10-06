<template>
  <div>
    <CommonHeader :headerinfo="headerinfo" />
    <div class="serviceDeatils">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h3 v-if="balance>50" class="text-success">
              Balance
              <span class="float-right">1000/-</span>
            </h3>
            <h3 v-else-if="balance < 10" class="text-danger">
              Balance
              <span class="float-right">1000/-</span>
            </h3>

            <h3 v-else-if="balance>20" class="text-secondary">
              Balance
              <span class="float-right">1000/-</span>
            </h3>

            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-center">HISTORY</h5>
                <div class="card-text">
                  <table class="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Items</th>
                        <th scope="col">Total</th>
                        <th scope="col">Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>20-9-2019</td>
                        <td>Vegetable</td>
                        <td>500</td>
                        <td>1000</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>20-9-2019</td>
                        <td>Vegetable</td>
                        <td>500</td>
                        <td>1000</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>20-9-2019</td>
                        <td>Vegetable</td>
                        <td>500</td>
                        <td>1000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="resellerinfo">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Reseller Info</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    Name
                    <span class="float-right">Jon Kabir</span>
                  </li>
                  <li class="list-group-item">
                    Address
                    <span class="float-right">Dhaka,BAngladesh</span>
                  </li>
                  <li class="list-group-item">
                    Contact
                    <span class="float-right">+88012343456</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonHeader from "~/components/user/CommonHeader";
export default {
  layout: "userloged",
  components: { CommonHeader },
  data() {
    return {
      headerinfo: {
        title: "Single Service",
        description: "Here u can find our all features"
      },
      balance: 60
    };
  }
};
</script>

<style scoped>
.table {
  background-color: #d7ccc8 !important;
  color: black !important;
}

.resellerinfo {
  /* text-align: center; */
  padding: 10px;
  margin: 10px;
  margin-top: 30px;
}
.resellerinfo h5 {
  text-align: center;
}
</style>


