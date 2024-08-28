<script setup>
import Logo from "@images/logo.png"
</script>

<template>
  <VCard>
    <VCardText>
      <div class="d-flex justify-content-between">
        <div>
          <div>
            <img
              :src="Logo"
              alt=""
              class="mb-3"
            >
            <p class="mb-1">
              <strong>Ultimate Sales, Inventory, Accounting Management
                System</strong>
            </p>
            <p class="mb-1">
              <strong>Phone:</strong> 0170000000
            </p>
            <p class="mb-1">
              <strong>Email:</strong> support@codeshape.net
            </p>
            <p class="mb-1">
              <strong>Address:</strong> Ground Floor, Road# 24, House# 339,
              New DOHS, Mohakhali, Dhaka - 1206, Bangladesh
            </p>
          </div>
        </div>
        <div class="text-end">
          <h3 class="mb-3">
            Supplier Details
          </h3>
          <p class="mb-1">
            <strong>Supplier ID:</strong> Jemima Hoffman
          </p>
          <p class="mb-1">
            <strong>Supplier Name:</strong> Jemima Hoffman
          </p>
          <p class="mb-1">
            <strong>Company Name:</strong> Jemima Hoffman
          </p>
          <p class="mb-1">
            <strong>Email:</strong> Jemima Hoffman
          </p>
          <p class="mb-1">
            <strong>Contact Number:</strong> Jemima Hoffman
          </p>
          <p class="mb-1">
            <strong>Address:</strong> Jemima Hoffman
          </p>
        </div>
      </div>
      <VTable
        class="border"
        density="compact"
      >
        <thead>
          <tr>
            <th>Purchase No</th>
            <th>PO Reference</th>
            <th>Payment Terms</th>
            <th class="text-end">
              PO Date
            </th>
            <th class="text-end">
              Purchase Date
            </th>
            <th class="text-end">
              Note
            </th>
            <th>Status</th>
            <th>Created By</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>APP-1</td>
            <td>demo</td>
            <td>demo</td>
            <td>demo</td>
            <td>demo</td>
            <td>demo</td>
            <td>demo</td>
            <td>demo</td>
          </tr>
        </tbody>
      </VTable>
      <h4 class="my-3">
        Purchase Products:
      </h4>
      <VTable
        class="border"
        density="compact"
      >
        <thead>
          <tr>
            <th>Code</th>
            <th>Product Name</th>
            <th>Purchased Qty</th>
            <th class="text-end">
              Returned Qty
            </th>
            <th class="text-end">
              Unit Price
            </th>
            <th class="text-end">
              Unit Tax
            </th>
            <th>Unit Cost</th>
            <th>Total</th>
            <th>Total Return</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>APP-1</td>
            <td>demo</td>
            <td>demo</td>
            <td>demo</td>
            <td>demo</td>
            <td>demo</td>
            <td>demo</td>
            <td>demo</td>
            <td>demo</td>
          </tr>
        </tbody>
      </VTable>
      <div class="d-flex justify-content-between">
        <div>
          <h4 class="my-3">
            Payment History:
          </h4>
          <div class="p_history">
            <h3>No payments available yet!</h3>
            <p class="mb-0 mt-2">
              You haven/'t add any payment for this purchase. After adding
              payments you will see the list here.
            </p>
          </div>
        </div>
        <div class="my-3">
          <table class="table table-sm table-bordered">
            <tbody>
              <tr>
                <th>Subtotal</th>
                <td>100</td>
              </tr>
              <tr>
                <th>Cost of Return Products:</th>
                <td>0</td>
              </tr>
              <tr>
                <th>Discount</th>
                <td>0</td>
              </tr>
              <tr>
                <th>Transport</th>
                <td>0</td>
              </tr>
              <tr>
                <th>Tax (10%):</th>
                <td>0</td>
              </tr>
              <tr>
                <th>Total:</th>
                <td>0</td>
              </tr>
              <tr>
                <th>Total Paid:</th>
                <td>0</td>
              </tr>
              <tr>
                <th>Due</th>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </VCardText>
  </VCard>
</template>
